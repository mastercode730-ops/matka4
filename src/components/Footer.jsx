import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 border-4 border-green-600 rounded overflow-hidden">
      <div className="bg-gradient-to-b from-green-500 to-green-700 p-4 text-center">
        <p className="text-white text-sm leading-relaxed mb-2">
          satta king fast result | satta king | satta result | satta king up | satta king online | satta king result | satta king chart | satta record | satta king record | satta king ghaziabad | satta king faridabad | satta king desawar | satta king gali | satta fast
        </p>
      </div>
      <div className="bg-[#003366] text-white p-4 text-center">
        <div className="flex justify-center gap-2 mb-3 flex-wrap">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-xs font-bold transition">Share</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs font-bold transition">Tweet</button>
          <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-bold transition">Pin</button>
          <button className="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded text-xs font-bold transition">Share</button>
        </div>
        <p className="text-xs mb-1">
          <a href="#" className="hover:underline">Home</a> | 
          <a href="#" className="hover:underline mx-1">Privacy Policy</a> | 
          <a href="#" className="hover:underline mx-1">Contact Us</a> | 
          <a href="#" className="hover:underline">Disclaimer</a>
        </p>
        <p className="text-xs font-semibold text-gray-300">
          © 2018 - 2026 SattaFastResult.in All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
