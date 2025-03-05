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
          <button className="bg-[#00A3FF] text-white h-[38px] px-4 rounded-full flex items-center gap-2 text-sm mr-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
            </svg>
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Переключатели для вкладки Gifts */}
      {activeTab === 'gifts' && (
        <div className="w-full bg-black px-4 py-2">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#17181C] rounded-2xl p-1">
              <div className="grid grid-cols-2 gap-1">
                <button className="py-3 px-4 rounded-xl bg-[#2C2C30] text-white text-lg font-medium">
                  Listed Gifts
                </button>
                <button className="py-3 px-4 rounded-xl bg-[#2C2C30] text-white text-lg font-medium">
                  Unlisted Gifts
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Панель фильтров */}
      {activeTab !== 'gifts' && (
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
      )}

      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center overflow-hidden">
        {activeTab === 'market' ? (
          <div className="animate-scale-in">
            <h1 className="text-white text-6xl font-bold">Soon</h1>
          </div>
        ) : activeTab === 'gifts' ? (
          <div className="animate-slide-in-right">
            <div className="bg-[#1E2124] p-4 mb-4 rounded-lg">
              <p className="text-gray-300">Want to sell your Gift? Transfer it to <span className="text-[#00A6FF]">@GiftRelayer</span></p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 animate-slide-in-left">
            <h1 className="text-white text-6xl font-bold capitalize">{activeTab}</h1>
            <p className="text-[#8B8B8B] text-xl">Вкладка еще не готова</p>
          </div>
        )}
      </main>

      {/* Нижняя навигация */}
      <nav className="w-full bg-black py-3 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex items-start justify-between pt-2 pb-2">
          {/* Market */}
          <button 
            className={`flex flex-col items-center gap-2 ${activeTab === 'market' ? 'active-tab-indicator' : ''}`}
            onClick={() => setActiveTab('market')}
          >
            <div className={`transition-transform duration-200 ${activeTab === 'market' ? 'scale-110' : ''}`}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'market' ? "#00A3FF" : "#8B8B8B"}>
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM9 8H7V10H9V8ZM7 12H9V14H7V12ZM9 16H7V18H9V16ZM13 8H11V10H13V8ZM11 12H13V14H11V12ZM13 16H11V18H13V16ZM17 8H15V10H17V8ZM15 12H17V14H15V12ZM17 16H15V18H17V16Z"/>
              </svg>
            </div>
            <span className={`text-sm transition-colors duration-200 ${activeTab === 'market' ? "text-[#00A3FF]" : "text-[#8B8B8B]"}`}>Market</span>
          </button>

          {/* Auctions */}
          <button 
            className={`flex flex-col items-center gap-2 ${activeTab === 'auctions' ? 'active-tab-indicator' : ''}`}
            onClick={() => setActiveTab('auctions')}
          >
            <div className={`transition-transform duration-200 ${activeTab === 'auctions' ? 'scale-110' : ''}`}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'auctions' ? "#00A3FF" : "#8B8B8B"}>
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"/>
              </svg>
            </div>
            <span className={`text-sm transition-colors duration-200 ${activeTab === 'auctions' ? "text-[#00A3FF]" : "text-[#8B8B8B]"}`}>Auctions</span>
          </button>

          {/* My Gifts */}
          <button 
            className={`flex flex-col items-center gap-2 ${activeTab === 'gifts' ? 'active-tab-indicator' : ''}`}
            onClick={() => setActiveTab('gifts')}
          >
            <div className={`transition-transform duration-200 ${activeTab === 'gifts' ? 'scale-110' : ''}`}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'gifts' ? "#00A3FF" : "#8B8B8B"}>
                <path d="M20 7H16.83C17.92 5.91 18.24 4.25 17.65 2.83C17.06 1.41 15.76 0.5 14.25 0.5C13.38 0.5 12.54 0.82 11.86 1.42L10 3.28L8.14 1.42C7.46 0.82 6.62 0.5 5.75 0.5C4.24 0.5 2.94 1.41 2.35 2.83C1.76 4.25 2.08 5.91 3.17 7H0V13H2V22H22V13H24V7H20ZM14.25 2.5C14.66 2.5 15.05 2.69 15.3 3.01C15.55 3.33 15.63 3.75 15.52 4.14C15.26 5 14.29 5.87 13.17 6.56C12.25 5.22 12.07 3.61 12.71 2.83C13 2.5 13.61 2.5 14.25 2.5ZM5.75 2.5C6.39 2.5 7 2.5 7.29 2.83C7.93 3.61 7.75 5.22 6.83 6.56C5.71 5.87 4.74 5 4.48 4.14C4.37 3.75 4.45 3.33 4.7 3.01C4.95 2.69 5.34 2.5 5.75 2.5ZM2 11H11V9H2V11ZM4 20V13H11V20H4ZM20 20H13V13H20V20ZM22 11H13V9H22V11Z"/>
              </svg>
            </div>
            <span className={`text-sm transition-colors duration-200 ${activeTab === 'gifts' ? "text-[#00A3FF]" : "text-[#8B8B8B]"}`}>My Gifts</span>
          </button>

          {/* Activity */}
          <button 
            className={`flex flex-col items-center gap-2 ${activeTab === 'activity' ? 'active-tab-indicator' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <div className={`transition-transform duration-200 ${activeTab === 'activity' ? 'scale-110' : ''}`}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'activity' ? "#00A3FF" : "#8B8B8B"}>
                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20ZM19 19V5H5V19H19ZM8 11H11V17H13V11H16L12 7L8 11Z"/>
              </svg>
            </div>
            <span className={`text-sm transition-colors duration-200 ${activeTab === 'activity' ? "text-[#00A3FF]" : "text-[#8B8B8B]"}`}>Activity</span>
          </button>
        </div>
      </nav>
    </div>
  );
}