import React from 'react';

const markets = [
  "DESAWER", "FARIDABAD", "GHAZIABAD", "GALI", "JAIPUR DAY", "DELHI BAZAR",
  "SHREE GANESH", "SIKANDRABAD", "SHREE SAI", "PUNJAB MAIL", "MANALI", "GALI DISAWAR MIX"
];

const ChartsAndRecords = () => {
  return (
    <div className="mb-4 bg-[#2b9348] pb-4">
      {/* Weekly Satta Chart Header */}
      <div className="bg-[#0f4c5c] text-white text-center font-bold text-lg py-1 border-b-2 border-white">
        Weekly Satta Chart
      </div>

      {/* 2026 Record Chart */}
      <div className="text-center">
        <h2 className="text-white font-bold text-lg py-2">
          SATTA KING RECORD CHART 2026
        </h2>
        <div className="px-2 space-y-1">
          {markets.map((market, index) => (
            <a 
              key={index} 
              href="#" 
              className="block bg-black text-white py-1 px-4 text-sm font-semibold rounded-full border border-black shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] hover:bg-gray-800 transition-colors"
            >
              {market} RECORD CHART 2026
            </a>
          ))}
        </div>
      </div>

      {/* 2025 Record Chart */}
      <div className="text-center mt-4 border-t-2 border-[#1e7033] pt-2">
        <h2 className="text-white font-bold text-lg py-2">
          SATTA KING RECORD CHART 2025
        </h2>
        <div className="px-2 space-y-1">
          {markets.map((market, index) => (
            <a 
              key={index} 
              href="#" 
              className="block bg-black text-white py-1 px-4 text-sm font-semibold rounded-full border border-black shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] hover:bg-gray-800 transition-colors"
            >
              {market} RECORD CHART 2025
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartsAndRecords;
