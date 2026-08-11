import React, { useState, useEffect, useCallback } from 'react';
import { WHATSAPP_URL, WHATSAPP_NUMBER, SITE_NAME, SITE_DOMAIN } from './constants';
import { fetchTodayResults, fetchMonthlyChart } from './api';

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const REFRESH_MS = 15_000;

export default function App() {
  const [games, setGames]           = useState([]);
  const [todayDate, setTodayDate]   = useState('');
  const [yesterdayDate, setYDate]   = useState('');
  const [searchQ, setSearchQ]       = useState('');
  const [syncing, setSyncing]       = useState(false);
  const [chartMonth, setChartMonth] = useState(() => String(new Date().getMonth() + 1).padStart(2, '0'));
  const [chartYear, setChartYear]   = useState(() => String(new Date().getFullYear()));
  const [chartData, setChartData]   = useState(null);

  const loadResults = useCallback(async () => {
    try {
      setSyncing(true);
      const json = await fetchTodayResults();
      if (json && json.success && Array.isArray(json.data)) {
        setGames(json.data);
        if (json.today_date) setTodayDate(json.today_date);
        if (json.yesterday_date) setYDate(json.yesterday_date);
      }
    } catch (e) {
      console.warn('[Matka4] API failed:', e.message);
    } finally {
      setTimeout(() => setSyncing(false), 800);
    }
  }, []);

  useEffect(() => {
    loadResults();
    const id = setInterval(loadResults, REFRESH_MS);
    return () => clearInterval(id);
  }, [loadResults]);

  const loadChart = useCallback(async (month, year) => {
    try {
      const json = await fetchMonthlyChart(month, year);
      if (json && json.success && json.rows) {
        setChartData(json);
      }
    } catch (e) {
      console.warn('[Matka4] Chart API failed:', e.message);
    }
  }, []);

  useEffect(() => {
    loadChart(chartMonth, chartYear);
  }, [loadChart, chartMonth, chartYear]);

  const filtered = searchQ
    ? games.filter(g => g.name.toLowerCase().includes(searchQ.toLowerCase()) || g.code.toLowerCase().includes(searchQ.toLowerCase()))
    : games;

  const spotlightGame = games.find(g => g.is_highlight && g.is_main) || games[0];

  const goToMonth = (month, year) => {
    setChartMonth(month);
    setChartYear(year);
  };

  const mIdx = parseInt(chartMonth, 10) - 1;
  const prevMIdx = mIdx === 0 ? 11 : mIdx - 1;
  const prevYear = mIdx === 0 ? parseInt(chartYear) - 1 : parseInt(chartYear);
  const nextMIdx = mIdx === 11 ? 0 : mIdx + 1;
  const nextYear = mIdx === 11 ? parseInt(chartYear) + 1 : parseInt(chartYear);
  const todayDay = todayDate ? todayDate.split('-')[2] : '';

  const fmtFullDate = (d) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const SpinnerIcon = () => (
    <span className="wait-spinner" title="लाइव रिजल्ट का इंतज़ार">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9.5" />
        <line className="clock-hand" x1="12" y1="12" x2="12" y2="6.5" />
      </svg>
    </span>
  );

  return (
    <div id="wrapper">
      {/* ── BREAKING RESULT FLASH BAR ── */}
      {spotlightGame && (
        <div className="lrs">
          <span className="lrs-tag"><i className="lrs-dot" />अभी आया रिजल्ट</span>
          <span className="lrs-game">{spotlightGame.name}</span>
          <span className="lrs-time">({spotlightGame.draw_time})</span>
          <span className="lrs-arrow">&#10148;</span>
          <span className="lrs-num">{!spotlightGame.today_number || spotlightGame.today_number === 'XX' || spotlightGame.today_number === '--' ? '??' : spotlightGame.today_number}</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa-life" style={{ padding: '3px 12px', fontSize: '11px', marginLeft: 8 }}>
            💬 WhatsApp
          </a>
        </div>
      )}

      {/* ── HEADER ── */}
      <header className="header-life">
        <h1>{SITE_NAME}</h1>
        <div className="sub">{fmtFullDate(todayDate || new Date())} &bull; {SITE_DOMAIN}</div>
        <div style={{ marginTop: 10 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa-life">
            💬 खाईवाल WhatsApp सपोर्ट
          </a>
        </div>
      </header>

      <div className="wrap">
        {/* ── WHATSAPP BANNER ── */}
        <div className="wa-life-banner">
          <div>
            <div className="wa-life-title">👑 सीधा खाईवाल दरबार &bull; 100% SATTA KING LIFE</div>
            <div className="wa-life-sub">सिंगल जोड़ी और हरूफ प्राप्त करने के लिए WhatsApp करें: {WHATSAPP_NUMBER}</div>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa-life">
            📲 WhatsApp चैट
          </a>
        </div>

        {/* ── HERO LIVE CARD ── */}
        {spotlightGame && (
          <div className="hero-card-life">
            <span className="hero-chip-life">&#9210; सुपरफास्ट लाइव रिजल्ट (LIVE DRAW)</span>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#fff' }}>{spotlightGame.name}</div>
            <div className="hero-number-life">
              {!spotlightGame.today_number || spotlightGame.today_number === 'XX' || spotlightGame.today_number === '--' ? <SpinnerIcon /> : spotlightGame.today_number}
            </div>
            <div style={{ color: 'var(--dim)', fontSize: '14px' }}>
              समय: <b style={{ color: '#fff' }}>{spotlightGame.draw_time}</b> &nbsp;|&nbsp; कल का नंबर: <b style={{ color: 'var(--emerald)' }}>{spotlightGame.yesterday_number || '—'}</b>
            </div>
          </div>
        )}

        {/* ── SEARCH BAR ── */}
        <div style={{ margin: '20px 0 10px' }}>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '12px 18px',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              fontSize: '15px',
              background: '#18181b',
              color: '#fff',
              outline: 'none',
            }}
            placeholder="🔍 गेम सर्च करें (Gali, Desawar, Faridabad, Ghaziabad...)"
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
          />
        </div>

        {/* ── RESULTS GRID ── */}
        <div style={{ margin: '28px 0 12px', fontSize: '20px', fontWeight: 800, color: 'var(--emerald)' }}>
          ⚡ सभी सट्टा बाज़ार परिणाम (ALL LIVE RESULTS)
        </div>

        <div className="results-grid-life">
          {filtered.map((g) => {
            const isPending = !g.today_number || g.today_number === 'XX' || g.today_number === '--';

            return (
              <div key={g.code} className="card-life">
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#fff' }}>{g.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--dim)', marginTop: 4 }}>
                    ⏰ {g.draw_time} &nbsp;|&nbsp; कल: {g.yesterday_number || '—'}
                  </div>
                </div>
                <div className={`card-life-badge ${isPending ? 'pending' : ''}`}>
                  {isPending ? <SpinnerIcon /> : g.today_number}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MONTHLY ARCHIVE TABLE ── */}
        <div style={{ margin: '40px 0 12px', fontSize: '20px', fontWeight: 800, color: 'var(--emerald)' }}>
          📊 मासिक रिकॉर्ड चार्ट &mdash; {chartData ? `${MONTH_NAMES[parseInt(chartData.month, 10) - 1]?.toUpperCase()} ${chartData.year}` : 'ARCHIVE'}
        </div>

        <div className="archive-card-life">
          <table className="table-life" aria-label="Monthly Archive Chart">
            <thead>
              <tr>
                <th style={{ width: 60 }}>तारीख</th>
                <th>DESAWAR</th>
                <th>FARIDABAD</th>
                <th>GAZIYABAD</th>
                <th>GALI</th>
              </tr>
            </thead>
            <tbody>
              {chartData?.rows?.map((r) => {
                const isToday = r.day === todayDay;
                const hasNum = (val) => val && val !== 'XX' && val !== '--';
                return (
                  <tr key={r.day} className={isToday ? 'today-row' : ''}>
                    <td><b>{r.day}</b></td>
                    <td className={hasNum(r.DS) ? 'has-num' : ''}>{r.DS === 'XX' && isToday ? <SpinnerIcon /> : (r.DS || '—')}</td>
                    <td className={hasNum(r.FB) ? 'has-num' : ''}>{r.FB === 'XX' && isToday ? <SpinnerIcon /> : (r.FB || '—')}</td>
                    <td className={hasNum(r.GB) ? 'has-num' : ''}>{r.GB === 'XX' && isToday ? <SpinnerIcon /> : (r.GB || '—')}</td>
                    <td className={hasNum(r.GL) ? 'has-num' : ''}>{r.GL === 'XX' && isToday ? <SpinnerIcon /> : (r.GL || '—')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="life-nav-btns">
            <button
              className="life-btn"
              onClick={() => goToMonth(String(prevMIdx + 1).padStart(2, '0'), String(prevYear))}
            >
              ← {MONTH_NAMES[prevMIdx]?.substring(0, 3)} {prevYear}
            </button>
            <button
              className="life-btn"
              onClick={() => goToMonth(String(nextMIdx + 1).padStart(2, '0'), String(nextYear))}
            >
              {MONTH_NAMES[nextMIdx]?.substring(0, 3)} {nextYear} →
            </button>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="footer-life">
          <p style={{ color: 'var(--dim)', marginBottom: 12 }}>{SITE_NAME} &bull; {SITE_DOMAIN} &bull; ALL RIGHTS RESERVED 2026</p>
          <div style={{ marginBottom: 16 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa-life">
              💬 24x7 WhatsApp हेल्पलाइन: {WHATSAPP_NUMBER}
            </a>
          </div>
          <div>
            <select
              value={chartMonth}
              onChange={e => setChartMonth(e.target.value)}
              aria-label="Select month"
            >
              {MONTH_NAMES.map((m, i) => (
                <option key={m} value={String(i + 1).padStart(2, '0')}>{m}</option>
              ))}
            </select>
            <select
              value={chartYear}
              onChange={e => setChartYear(e.target.value)}
              aria-label="Select year"
            >
              {[2026, 2025, 2024, 2023, 2022].map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </footer>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="floating-wa">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="life-fab-wa">
          💬 WhatsApp
        </a>
      </div>

      {/* FAB */}
      <div className="floating-bar">
        <button className="life-fab" onClick={() => window.location.reload()}>
          ⚡ रिफ्रेश
        </button>
      </div>
    </div>
  );
}
