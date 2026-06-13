import React from 'react';
import Header from './components/Header';
import LiveResults from './components/LiveResults';
import NoticeBoard from './components/NoticeBoard';
import MarketList from './components/MarketList';
import Information from './components/Information';
import ResultChart from './components/ResultChart';
import KalyanMilan from './components/KalyanMilan';
import ChartsAndRecords from './components/ChartsAndRecords';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      <div className="w-full pb-2">
        <LiveResults />
        <NoticeBoard />
        <MarketList />
        <Information />
        <ResultChart />
        <KalyanMilan />
        <ChartsAndRecords />
        <SEOContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
