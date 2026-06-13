import React from 'react';

const ResultChart = () => {
  const dummyDates = Array.from({ length: 30 }, (_, i) => {
    const day = (i + 1).toString().padStart(2, '0');
    return {
      date: `${day}-06-2026`,
      result1: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
      result2: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
      result3: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
      result4: Math.floor(Math.random() * 100).toString().padStart(2, '0'),
    };
  });

  return (
    <>
      <div className="mb-4 border-4 border-green-600 rounded text-center bg-white">
        <h3 className="p-3 mb-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold">
          ♨️Yahan Aap Month Aur Year Select Karke Combined Chart Dekh Sakte Hai.
        </h3>
        <div className="flex justify-center items-center gap-2 pb-3">
          <select className="border border-gray-400 p-1 text-black bg-white rounded">
            <option>2026</option>
          </select>
          <select className="border border-gray-400 p-1 text-black bg-white rounded">
            <option>June</option>
          </select>
          <button className="bg-red-600 text-white font-bold py-1 px-4 border border-transparent rounded hover:bg-red-700">
            GO
          </button>
        </div>
      </div>

      <div className="mb-4 border-4 border-green-600 rounded text-center bg-white">
        <h3 className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold">
          ♨️Current Month record chart June 2026
        </h3>
        
        {/* Table 1 */}
        <div className="overflow-x-auto p-1">
          <table className="w-full bg-white text-center border-collapse">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-black p-1">Date</th>
                <th className="border border-black p-1">DESAWER</th>
                <th className="border border-black p-1">FARIDABAD</th>
                <th className="border border-black p-1">GHAZIABAD</th>
                <th className="border border-black p-1">GALI</th>
              </tr>
            </thead>
            <tbody>
              {dummyDates.map((row, i) => (
                <tr key={i}>
                  <td className="border border-black p-1 bg-green-700 text-white font-bold">{row.date.substring(0, 5)}</td>
                  <td className="border border-black p-1 text-black h-8 font-bold">{row.result1}</td>
                  <td className="border border-black p-1 text-black font-bold">{row.result2}</td>
                  <td className="border border-black p-1 text-black font-bold">{row.result3}</td>
                  <td className="border border-black p-1 text-black font-bold">{row.result4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default ResultChart;
