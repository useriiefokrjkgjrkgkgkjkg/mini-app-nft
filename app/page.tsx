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
    // Инициализация Telegram Mini App
    if (window.Telegram) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-4xl font-bold mb-8">NFT Marketplace</h1>
      <p className="text-gray-400 text-center mb-8">
        Ваш путь в мир цифрового искусства начинается здесь
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Просмотреть коллекции
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Создать NFT
        </button>
      </div>
    </main>
  );
} 