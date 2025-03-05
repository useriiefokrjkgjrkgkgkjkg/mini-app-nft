'use client';

import React, { useEffect, useState } from 'react';
import { config } from '../config';

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
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    // Проверяем, открыто ли приложение в Telegram
    const isTelegramApp = window.Telegram && window.Telegram.WebApp;
    setIsTelegram(!!isTelegramApp);

    if (isTelegramApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {!isTelegram && (
        <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 px-4">
          Для полного функционала, пожалуйста, откройте это приложение в Telegram
        </div>
      )}
      <h1 className="text-white text-4xl font-bold mb-8">NFT Marketplace</h1>
      <p className="text-gray-400 text-center mb-8">
        Ваш путь в мир цифрового искусства начинается здесь
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          onClick={() => {
            if (!isTelegram) {
              window.open(`https://t.me/${config.botUsername}`, '_blank');
            }
          }}
        >
          Просмотреть коллекции
        </button>
        <button 
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          onClick={() => {
            if (!isTelegram) {
              window.open(`https://t.me/${config.botUsername}`, '_blank');
            }
          }}
        >
          Создать NFT
        </button>
      </div>
      {!isTelegram && (
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Откройте в Telegram для полного доступа:</p>
          <a 
            href={`https://t.me/${config.botUsername}`}
            className="bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold py-2 px-4 rounded inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
            </svg>
            Открыть в Telegram
          </a>
        </div>
      )}
    </main>
  );
} 