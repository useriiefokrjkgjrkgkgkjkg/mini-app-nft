'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        MainButton: {
          text: string;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
        };
      };
    };
  }
}

export default function Home() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Верхняя панель */}
      <div className="w-full bg-[#1c1c1e] p-2 flex items-center justify-center">
        <div className="max-w-3xl w-full flex items-center justify-between px-4 py-1">
          <div className="flex items-center gap-1.5">
            {/* Логотип и счетчик */}
            <div className="flex items-center bg-[#2c2c30] rounded-xl h-[38px] px-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
              </svg>
              <span className="text-white text-sm ml-2 mr-1">0</span>
              <svg className="w-4 h-4 text-white opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15l5-5 5 5"/>
              </svg>
            </div>

            {/* Кнопки + и - */}
            <button className="w-[38px] h-[38px] bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-light">
              +
            </button>
            <button className="w-[38px] h-[38px] bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-light">
              −
            </button>
          </div>

          {/* Кнопка Connect Wallet */}
          <button className="bg-[#00A3FF] text-white h-[38px] px-4 rounded-full flex items-center gap-2 text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
            </svg>
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold">Soon</h1>
      </main>
    </div>
  );
}