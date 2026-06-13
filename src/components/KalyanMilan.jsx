import React from 'react';

const KalyanMilan = () => {
  return (
    <div className="mb-4 text-center font-bold">
      <h2 className="bg-[#114011] text-white text-lg py-1 mb-1 font-bold">
        ♨️ Kalyan King Result ♨️
      </h2>
      
      <div className="bg-[#FFFF00] border border-black flex justify-between items-center px-4 py-2 mb-1">
        <div className="flex-1">
          <h3 className="text-black text-lg">KALYAN MILAN</h3>
          <p className="text-[#FF0000] text-sm">Loading...</p>
        </div>
        <button className="bg-[#0000FF] text-white text-xs font-bold py-1 px-3 rounded shadow-md border border-white">
          Refresh
        </button>
      </div>
      
      <div className="bg-[#FFFF00] border border-black flex justify-between items-center px-4 py-2 mb-4">
        <div className="flex-1">
          <h3 className="text-black text-lg">KALYAN NIGHT</h3>
          <p className="text-[#FF0000] text-sm">Loading...</p>
        </div>
        <button className="bg-[#0000FF] text-white text-xs font-bold py-1 px-3 rounded shadow-md border border-white">
          Refresh
        </button>
      </div>

      <div className="border-4 border-[#114011]">
        <h3 className="bg-[#A52A2A] text-white py-1 text-sm sm:text-base font-bold border-b border-[#114011]">
          ♨️ Kalyan Milan ♨️
        </h3>
        <table className="w-full bg-white text-center border-collapse text-black">
          <thead>
            <tr className="bg-[#FFA500] border-b border-black text-sm">
              <th className="border-r border-black p-1">Date</th>
              <th className="border-r border-black p-1">KALYAN MILAN</th>
              <th className="p-1">KALYAN NIGHT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: '11-06-2026', kalyan: 'XXX', night: 'XXX' },
              { date: '12-06-2026', kalyan: 'XXX', night: 'XXX' },
              { date: '13-06-2026', kalyan: 'XXX', night: 'XXX' },
            ].map((row, i) => (
              <tr key={i} className="border-b border-black font-semibold text-sm">
                <td className="border-r border-black p-1 bg-[#FFA500] font-bold">{row.date}</td>
                <td className="border-r border-black p-1 text-[#0000FF]">{row.kalyan}</td>
                <td className="p-1 text-[#0000FF]">{row.night}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KalyanMilan;
