import React from 'react';
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants';

const Footer = ({ onNavigate }) => {
  const handleNav = (page, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
    }
  };

  return (
    <div className="mt-8 border-4 border-green-600 rounded overflow-hidden">
      <div className="bg-gradient-to-b from-green-500 to-green-700 p-4 text-center">
        <p className="text-white text-sm leading-relaxed mb-2">
          satta king fast result | satta king | satta result | satta king up | satta king online | satta king result | satta king chart | satta record | satta king record | satta king ghaziabad | satta king faridabad | satta king desawar | satta king gali | satta fast
        </p>
      </div>
      <div className="bg-[#003366] text-white p-4 text-center">
        <div className="flex justify-center gap-2 mb-3 flex-wrap">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-bold transition inline-block"
          >
            💬 WhatsApp Support ({WHATSAPP_NUMBER})
          </a>
        </div>
        <div className="flex justify-center gap-2 mb-3 flex-wrap">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-xs font-bold transition">Share</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs font-bold transition">Tweet</button>
          <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-bold transition">Pin</button>
          <button className="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded text-xs font-bold transition">Share</button>
        </div>
        <p className="text-xs mb-2 flex justify-center items-center flex-wrap gap-2">
          <a
            href="#home"
            onClick={(e) => handleNav('home', e)}
            className="hover:underline text-gray-200 hover:text-white"
          >
            Home
          </a>
          <span>|</span>
          <a
            href="#privacy"
            onClick={(e) => handleNav('privacy', e)}
            className="hover:underline text-gray-200 hover:text-white"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#terms"
            onClick={(e) => handleNav('terms', e)}
            className="hover:underline text-gray-200 hover:text-white"
          >
            Terms & Conditions
          </a>
          <span>|</span>
          <a
            href="#disclaimer"
            onClick={(e) => handleNav('disclaimer', e)}
            className="hover:underline text-gray-200 hover:text-white"
          >
            Disclaimer
          </a>
          <span>|</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-yellow-300 hover:text-yellow-200 font-bold"
          >
            Contact Us
          </a>
        </p>
        <p className="text-xs font-semibold text-gray-300">
          © 2018 - 2026 {SITE_NAME} &bull; {SITE_DOMAIN} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
