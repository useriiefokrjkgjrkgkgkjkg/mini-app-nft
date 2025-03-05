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
      <div className="w-full bg-[#1c1c1e] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Логотип и счетчик */}
          <div className="flex items-center bg-[#2c2c30] rounded-lg px-3 py-2">
            <svg className="w-6 h-6 text-[#00A3FF]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
            </svg>
            <span className="text-white ml-2 mr-1">0</span>
            <svg className="w-4 h-4 text-white opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          {/* Кнопки + и - */}
          <button className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-2xl">
            +
          </button>
          <button className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-2xl">
            -
          </button>
          
          {/* Кнопка профиля */}
          <button className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>
        </div>

        {/* Кнопка Connect Wallet */}
        <button className="bg-[#00A3FF] text-white px-6 py-3 rounded-full flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
          </svg>
          Connect Wallet
        </button>
      </div>

      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold">Soon</h1>
      </main>
    </div>
  );
} 