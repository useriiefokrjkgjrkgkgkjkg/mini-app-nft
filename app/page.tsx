'use client';

import React, { useEffect, useState } from 'react';

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
  const [activeTab, setActiveTab] = useState('market');

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Верхняя панель */}
      <div className="w-full bg-black p-2 flex items-center justify-center">
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

      {/* Панель фильтров */}
      <div className="w-full bg-black px-4 py-2 flex items-center justify-between">
        {/* NFTs и Model фильтры */}
        <div className="flex items-center gap-2">
          {/* NFTs фильтр */}
          <div className="bg-[#2c2c30] rounded-xl px-3 py-2 flex items-center justify-between min-w-[120px]">
            <div className="flex flex-col">
              <span className="text-[#8B8B8B] text-xs">NFTs</span>
              <span className="text-white text-sm">All</span>
            </div>
            <svg className="w-4 h-4 text-white opacity-60 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          {/* Model фильтр */}
          <div className="bg-[#2c2c30] rounded-xl px-3 py-2 flex items-center justify-between min-w-[120px]">
            <div className="flex flex-col">
              <span className="text-[#8B8B8B] text-xs">Model</span>
              <span className="text-white text-sm">All</span>
            </div>
            <svg className="w-4 h-4 text-white opacity-60 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        {/* Кнопки справа */}
        <div className="flex items-center gap-2 -ml-2">
          {/* Кнопка удаления */}
          <button className="w-[34px] h-[34px] bg-[#2c2c30] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
            </svg>
          </button>

          {/* Кнопка действия */}
          <button className="w-[34px] h-[34px] bg-[#2c2c30] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold">Soon</h1>
      </main>

      {/* Нижняя навигация */}
      <nav className="w-full bg-[#17181C] py-2 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {/* Market */}
          <button 
            className="flex flex-col items-center gap-1" 
            onClick={() => setActiveTab('market')}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill={activeTab === 'market' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"/>
            </svg>
            <span className={activeTab === 'market' ? "text-[#00A3FF] text-xs" : "text-[#8B8B8B] text-xs"}>Market</span>
          </button>

          {/* Auctions */}
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => setActiveTab('auctions')}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill={activeTab === 'auctions' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M17,10.43V2H7V10.43C7,10.79 7.18,11.13 7.47,11.32L11.34,13.8C11.75,14.06 12.25,14.06 12.66,13.8L16.53,11.32C16.82,11.13 17,10.79 17,10.43M7,20H17V17H7V20Z"/>
            </svg>
            <span className={activeTab === 'auctions' ? "text-[#00A3FF] text-xs" : "text-[#8B8B8B] text-xs"}>Auctions</span>
          </button>

          {/* My Gifts */}
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => setActiveTab('gifts')}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill={activeTab === 'gifts' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z"/>
            </svg>
            <span className={activeTab === 'gifts' ? "text-[#00A3FF] text-xs" : "text-[#8B8B8B] text-xs"}>My Gifts</span>
          </button>

          {/* Activity */}
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => setActiveTab('activity')}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill={activeTab === 'activity' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"/>
            </svg>
            <span className={activeTab === 'activity' ? "text-[#00A3FF] text-xs" : "text-[#8B8B8B] text-xs"}>Activity</span>
          </button>
        </div>
      </nav>
    </div>
  );
}