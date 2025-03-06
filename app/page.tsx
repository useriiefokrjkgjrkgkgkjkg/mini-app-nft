<<<<<<< HEAD
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

      {/* Панель фильтров */}
      <div className="w-full bg-black px-4 py-2">
=======
'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <main className="min-h-screen py-8">
      {/* Filter Panel */}
      <div className="mb-8">
>>>>>>> 2e3dde65162734c502d8e4ac1ec21fd82cb40bf5
        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'all'
                ? 'bg-[#00A3FF] text-white'
                : 'bg-gray-800 text-gray-400'
            } hover:bg-[#00A3FF] hover:text-white transition-all`}
            onClick={() => setActiveTab('all')}
          >
            All Items
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'art'
                ? 'bg-[#00A3FF] text-white'
                : 'bg-gray-800 text-gray-400'
            } hover:bg-[#00A3FF] hover:text-white transition-all`}
            onClick={() => setActiveTab('art')}
          >
            Art
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'gaming'
                ? 'bg-[#00A3FF] text-white'
                : 'bg-gray-800 text-gray-400'
            } hover:bg-[#00A3FF] hover:text-white transition-all`}
            onClick={() => setActiveTab('gaming')}
          >
            Gaming
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Основной контент */}
      <main className="flex-1 flex items-center justify-center">
        {activeTab === 'market' ? (
          <h1 className="text-white text-6xl font-bold">Soon</h1>
        ) : (
          <div className="flex flex-col items-center gap-4">
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
            className="flex flex-col items-center gap-2" 
            onClick={() => setActiveTab('market')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'market' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM9 8H7V10H9V8ZM7 12H9V14H7V12ZM9 16H7V18H9V16ZM13 8H11V10H13V8ZM11 12H13V14H11V12ZM13 16H11V18H13V16ZM17 8H15V10H17V8ZM15 12H17V14H15V12ZM17 16H15V18H17V16Z"/>
            </svg>
            <span className={activeTab === 'market' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Market</span>
          </button>

          {/* Auctions */}
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => setActiveTab('auctions')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'auctions' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"/>
            </svg>
            <span className={activeTab === 'auctions' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Auctions</span>
          </button>

          {/* Activity */}
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => setActiveTab('activity')}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill={activeTab === 'activity' ? "#00A3FF" : "#8B8B8B"}>
              <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM13 7H11V13H17V11H13V7Z"/>
            </svg>
            <span className={activeTab === 'activity' ? "text-[#00A3FF] text-sm" : "text-[#8B8B8B] text-sm"}>Activity</span>
          </button>
        </div>
      </nav>
    </div>
  );
=======
      {/* Product Card */}
      <div className="px-4">
        <div className="w-[180px] bg-gray-800 rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src="/nft.jpg"
              alt="NFT"
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-full">
              <span className="text-sm text-white">2.5 ETH</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Lol Pop</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/avatar.jpg"
                  alt="Creator"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm text-gray-400">@creator</span>
              </div>
              <span className="text-sm text-[#00A3FF]">#123</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
>>>>>>> 2e3dde65162734c502d8e4ac1ec21fd82cb40bf5
}