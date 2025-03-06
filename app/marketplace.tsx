'use client';

import React, { useEffect, useState } from 'react';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('market');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#00A3FF] text-4xl font-bold animate-fade-up">
            NFT Market v3.0
          </h1>
          <div className="h-1 w-24 bg-[#00A3FF] mx-auto mt-4 animate-loading-bar"></div>
          <p className="text-gray-400 mt-2">Loading marketplace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col animate-fade-in">
      <div className="w-full bg-black p-2 flex items-center justify-center">
        <div className="max-w-3xl w-full flex items-center justify-between px-0">
          <div className="flex items-center gap-1.5 pl-2">
            <div className="flex items-center bg-[#2c2c30] rounded-xl h-[38px] px-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
              </svg>
              <span className="text-white text-sm ml-2 mr-1">0</span>
              <svg className="w-4 h-4 text-white opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15l5-5 5 5"/>
              </svg>
            </div>

            <button className="w-[38px] h-[38px] bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-light glow-effect">
              +
            </button>
            <button className="w-[38px] h-[38px] bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-light glow-effect">
              −
            </button>
          </div>

          <button className="bg-[#00A3FF] text-white h-[38px] px-4 rounded-full flex items-center gap-2 text-sm mr-2 glow-effect">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
            </svg>
            Connect Wallet
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-hidden">
        <div className="w-full animate-scale-in">
          <div className="px-4">
            <div className="w-[180px]">
              <div className="bg-[#17181C] rounded-2xl p-3 hover:bg-[#1E1F24] transition-colors">
                <div className="relative">
                  <div className="aspect-square rounded-xl bg-[#2C2C30] flex items-center justify-center mb-3">
                    <span className="text-4xl">🎮</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-[#00A3FF] rounded-full p-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-medium">Lol Pop</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[#8B8B8B] text-sm">#107605</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-[#2C2C30] rounded-full px-3 py-1">
                    <span className="text-white font-medium">1.1</span>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 