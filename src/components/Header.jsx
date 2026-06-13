import React from 'react';

const Header = () => {
  return (
    <>
      <header className="mt-1 text-center border-2 border-red-600 rounded">
        <div className="flex justify-center p-2">
          <a href="/">
            <img
              alt="Satta Fast Result"
              src="https://sattafastresult.in/images/newlogo.png"
              className="w-[250px] h-[80px]"
            />
          </a>
        </div>
      </header>

      <nav className="sticky top-0 bg-gradient-to-r from-green-500 to-green-600 mt-1 mb-2 p-2 flex justify-center z-50 rounded">
        <div className="flex w-full flex-wrap justify-center gap-2 max-w-4xl">
          <div className="flex-1 min-w-[80px]">
            <a className="block text-center bg-gray-200 text-black font-bold py-1 px-2 rounded w-full" href="/">Home</a>
          </div>
          <div className="flex-1 min-w-[80px]">
            <a className="block text-center bg-gray-200 text-black font-bold py-1 px-2 rounded w-full" href="/radhe-lottery">Lottery</a>
          </div>
          <div className="flex-1 min-w-[80px]">
            <a className="block text-center bg-gray-800 text-white font-bold py-1 px-2 rounded w-full" href="/chart">Chart</a>
          </div>
          <div className="flex-1 min-w-[80px]">
            <a className="block text-center bg-gray-800 text-white font-bold py-1 px-2 rounded w-full" href="/login">Login</a>
          </div>
        </div>
      </nav>

      <div className="mb-4 border-4 border-green-600 rounded">
        <div className="p-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-center text-2xl font-bold">
          ♨SattaFastResult.in♨
        </div>
        <div className="text-center p-2 bg-white text-black">
          <p className="font-bold">SATTA KING BEST SITE SATTA RESULT</p>
          <h6 className="text-xs font-semibold mt-1">DELHI BAZAR SATTA KING, DESAWER SATTA KING, FARIDABAD SATTA KING, GALI SATTA KING, GHAZIABAD SATTA KING, GURGAON SATTA KING, JAIPUR DAY SATTA KING, OLD UP KING SATTA KING, SHREE GANESH SATTA KING, SHREE SAI SATTA KING, SIKANDRABAD SATTA KING, SUPER DELHI SATTA KING, SATTA FAST RESULT</h6>
        </div>
      </div>
    </>
  );
};

export default Header;
