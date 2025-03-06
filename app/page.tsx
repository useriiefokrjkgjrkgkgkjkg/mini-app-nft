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
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0.087);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
    
    // Имитируем загрузку
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold animate-fade-up">
            NFT Market
          </h1>
          <div className="h-1 w-24 bg-[#00A3FF] mx-auto mt-4 animate-loading-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col animate-fade-in">
      {/* Верхняя панель */}
      <div className="w-full bg-black p-2 flex items-center justify-center">
        <div className="max-w-3xl w-full flex items-center justify-between px-0">
          <div className="flex items-center gap-1.5 pl-2">
            {/* Счетчик и стрелка */}
            <div className="flex items-center bg-[#2c2c30] rounded-xl h-[38px] px-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2">
                <path d="M12 2L20 8.5V15.5L12 22L4 15.5V8.5L12 2Z" />
              </svg>
              <span className="text-white text-sm ml-2 mr-1">{counter}</span>
              <svg className="w-4 h-4 text-white opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </div>

            {/* Кнопки + и - */}
            <button 
              className="w-[38px] h-[38px] bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-light"
              onClick={() => setCounter(prev => +(prev + 0.001).toFixed(3))}
            >
              +
            </button>
            <button 
              className="w-[38px] h-[38px] bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-light"
              onClick={() => setCounter(prev => +(prev - 0.001).toFixed(3))}
            >
              −
            </button>
          </div>

          {/* Кнопка Connect Wallet */}
          <button className="bg-[#00A3FF] text-white h-[38px] px-4 rounded-full flex items-center gap-2 text-sm mr-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L20 8.5V15.5L12 22L4 15.5V8.5L12 2Z" />
            </svg>
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Панель фильтров */}
      <div className="w-full bg-black px-4 py-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-[#2c2c30] rounded-xl px-4 py-2">
            <span className="text-white text-sm">NFTs</span>
            <span className="text-white text-sm">All</span>
            <svg className="w-4 h-4 text-white opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
          <div className="flex items-center gap-2 bg-[#2c2c30] rounded-xl px-4 py-2">
            <span className="text-white text-sm">Model</span>
            <span className="text-white text-sm">All</span>
            <svg className="w-4 h-4 text-white opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-white text-6xl font-bold">Soon</h1>
          <p className="text-[#8B8B8B] text-xl">Контент в разработке</p>
        </div>
      </main>

      {/* Нижняя навигация */}
      <nav className="w-full bg-black py-3 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex items-start justify-between pt-2 pb-2">
          {/* Market */}
          <button 
            className="flex flex-col items-center gap-2" 
            onClick={() => setActiveTab('market')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'market' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4Z"/>
            </svg>
            <span className={activeTab === 'market' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Market</span>
          </button>

          {/* Auctions */}
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => setActiveTab('auctions')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'auctions' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M15.0007 8H9.00073V15H15.0007V8ZM13.0007 13H11.0007V10H13.0007V13ZM21.0007 4H3.00073C2.44844 4 2.00073 4.44772 2.00073 5V19C2.00073 19.5523 2.44844 20 3.00073 20H21.0007C21.553 20 22.0007 19.5523 22.0007 19V5C22.0007 4.44772 21.553 4 21.0007 4ZM20.0007 18H4.00073V6H20.0007V18Z"/>
            </svg>
            <span className={activeTab === 'auctions' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Auctions</span>
          </button>

          {/* My Gifts */}
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => setActiveTab('gifts')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'gifts' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M20 7H16.83L18.07 5.76C18.26 5.57 18.26 5.26 18.07 5.07C17.88 4.88 17.57 4.88 17.38 5.07L15 7.45L12.62 5.07C12.43 4.88 12.12 4.88 11.93 5.07C11.74 5.26 11.74 5.57 11.93 5.76L13.17 7H10V5C10 4.45 9.55 4 9 4H6C5.45 4 5 4.45 5 5V7H4C3.45 7 3 7.45 3 8V19C3 19.55 3.45 20 4 20H20C20.55 20 21 19.55 21 19V8C21 7.45 20.55 7 20 7ZM7 5H8V7H7V5ZM5 18V9H19V18H5Z"/>
            </svg>
            <span className={activeTab === 'gifts' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>My Gifts</span>
          </button>

          {/* Gallery */}
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => setActiveTab('gallery')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'gallery' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 18V6H20V18H4ZM18 10L12.5 16L9 12L6 16H18V10Z"/>
            </svg>
            <span className={activeTab === 'gallery' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Gallery</span>
          </button>

          {/* Activity */}
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => setActiveTab('activity')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'activity' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92L20.59 5.5L13.5 13.5L9.5 9.5L2 17L3.5 18.5Z"/>
            </svg>
            <span className={activeTab === 'activity' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Activity</span>
          </button>
        </div>
      </nav>
    </div>
  );
}