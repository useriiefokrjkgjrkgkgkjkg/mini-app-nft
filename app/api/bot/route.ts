import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

export async function POST(request: Request) {
  try {
    const update = await request.json();
    
    // Проверяем, что это команда /start
    if (update.message?.text === '/start') {
      const chatId = update.message.chat.id;
      
      // Создаем сообщение с кнопкой для открытия веб-приложения
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: 'Здесь открой веб',
          reply_markup: {
            inline_keyboard: [[
              {
                text: 'Открыть приложение',
                web_app: {
                  url: WEBAPP_URL
                }
              }
            ]]
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing update:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 