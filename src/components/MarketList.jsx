import React from 'react';

const markets = [
  { name: 'DESAWER', oldResult: '52', newResult: '71', time: '05:00 AM' },
  { name: 'JAIPUR DAY', oldResult: '67', newResult: '80', time: '01:30 PM' },
  { name: 'PUNJAB MAIL', oldResult: '63', newResult: '82', time: '02:00 PM' },
  { name: 'SHREE SAI', oldResult: '38', newResult: '67', time: '02:40 PM' },
  { name: 'DELHI BAZAR', oldResult: '19', newResult: '--', time: '03:00 PM' },
  { name: 'SHREE GANESH', oldResult: '49', newResult: '--', time: '04:30 PM' },
  { name: 'SIKANDRABAD', oldResult: '37', newResult: '--', time: '05:45 PM' },
  { name: 'FARIDABAD', oldResult: '79', newResult: '--', time: '06:00 PM' },
  { name: 'MANALI', oldResult: '42', newResult: '--', time: '08:10 PM' },
  { name: 'GALI DISAWAR MIX', oldResult: '15', newResult: '--', time: '08:15 PM' },
  { name: 'GHAZIABAD', oldResult: '20', newResult: '--', time: '09:10 PM' },
  { name: 'GALI', oldResult: '59', newResult: '--', time: '11:00 PM' },
];

const MarketList = () => {
  return (
    <div className="mb-4 border-4 border-green-600 rounded bg-white">
      <h1 className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-center text-xl font-bold">
        📡 SATTA KING FAST RESULT FOR ALL MARKET
      </h1>
      <div className="p-2 space-y-2">
        {markets.map((market, index) => (
          <div key={index} className="border border-green-600 p-1 rounded">
            <div className="bg-white text-center font-bold">
              <span className="text-blue-900 text-lg">☞ {market.name} ☜</span><br/>
              <span>{market.oldResult}</span> ➯ <span className="text-black">{market.newResult}</span>
              <br/>
              <em><small className="text-gray-600 text-xs">({market.time})</small></em>
              <div className="flex justify-center gap-2 mt-2">
                <div className="w-1/2">
                  <a className="block bg-green-600 text-white text-sm py-1 rounded hover:bg-green-700" href="#">
                    YEAR CHART
                  </a>
                </div>
                <div className="w-1/2">
                  <a className="block bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700" href="https://shyamonline.com">
                    PLAY ONLINE
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketList;
