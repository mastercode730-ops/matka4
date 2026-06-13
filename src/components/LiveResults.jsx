import React from 'react';

const LiveResults = () => {
  return (
    <div className="space-y-4">
      {/* Join Group Section */}
      <div 
        className="text-center font-bold p-1 rounded-[20px] mb-4"
        style={{
          background: 'linear-gradient(Gold, white)',
          border: 'double 3px green'
        }}
      >
        <p className="text-black text-[16px]">
          सबसे पहले रिजल्ट देख ने के लिए ज्वाइन ग्रुप<br/>
          <span className="text-blue-600 text-[18px]">✈️🇫𝐀𝐒𝐓 🇰𝐇𝐀𝐁𝐀𝐑 ✈️</span><br/>
          <a href="https://telegram.me/Result_daily">
            <button 
              className="h-[40px] w-auto bg-[#32CD32] text-white border-[3px] border-double border-red-600 rounded-[20px] px-4 font-bold text-[18px] mt-1"
            >
              📳JOIN GROUP NOW 📳
            </button>
          </a>
        </p>
      </div>

      {/* Live Update Badge */}
      <div className="mb-4 border-4 border-green-600 rounded text-center bg-white">
        <p className="p-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold">
          📡 Live Update
        </p>
        <div className="font-bold py-2 animate-pulse text-red-600">
          <p className="inline-block mx-2">DELHI BAZAR</p><p className="inline-block mx-2">WAIT</p>
          <p className="inline-block mx-2">SHREE SAI</p><p className="inline-block mx-2">67</p>
          <p className="inline-block mx-2">PUNJAB MAIL</p><p className="inline-block mx-2">82</p>
        </div>
        <br />
        <button 
          className="bg-gray-800 text-white text-sm py-1 px-4 mb-2 rounded hover:bg-gray-700"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>

      {/* Radhe Lottery Block */}
      <div className="mb-4 border-4 border-green-600 rounded text-center bg-white">
        <p className="p-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold">
          ♨️ Radhe Lottery
        </p>
        <div className="py-2 text-black">
          <strong>Upcoming Result:</strong><br />
          03:00 PM<br />
          <span className="text-yellow-600 font-bold">Wait</span>
          <hr className="my-2 border-gray-300" />
          <strong>Current Result:</strong><br />
          02:00 PM<br />
          <span className="text-green-600 font-bold text-lg">75</span>
        </div>
      </div>
    </div>
  );
};

export default LiveResults;
