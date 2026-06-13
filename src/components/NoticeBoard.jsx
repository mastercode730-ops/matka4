import React from 'react';

const NoticeBoard = () => {
  return (
    <div className="mb-4 border-4 border-green-600 rounded bg-white">
      <p className="p-1 text-white text-center bg-gradient-to-r from-green-500 to-green-600 text-2xl font-bold">
        📋 Notice Board
      </p>
      <div className="p-2">
        <p className="text-red-600 font-bold mb-2">
          अगर आप खुद का बाजार चलते हैं ....और अपने बाजार का रिजल्ट हमारी वेबसाइट पर डलवाना चाहते हैं..तो आज ही हमसे संपर्क करें :-
        </p>
        <ul className="border border-red-600 font-bold list-disc pl-5 mb-2 py-2">
          <li className="text-blue-600">मात्र 5 मिनट में आपके बाजार का रिजल्ट वेबसाइट पर डाल दिया जायेगा |</li>
          <li className="text-cyan-600">आपके बाजार का एडमिन पैनल आपको बना कर दिया जायेगा...जिससे आप खुद अपने बाजार का रिजल्ट अपडेट कर सकेंगे |</li>
          <li className="text-red-600">आपके बाजार का पुराना रिकॉर्ड भी वेबसाइट पर दाल दिया जायेगा |</li>
        </ul>

        <p className="text-center font-bold mb-2">
          अधिक जानकारी के लिए आप निचे दिए नंबर पर संपर्क ( फोन / whatsup SMS ) कर सकते हैं | <br/> 
          शर्तें लागू ...
        </p>
        
        <div className="text-center">
          <a href="https://t.me/Elivis_jd">
            <button type="button" className="bg-green-600 text-white font-bold py-1 px-4 rounded hover:bg-green-700">
              Message
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
