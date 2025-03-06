import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

export async function GET() {
  try {
    // Устанавливаем вебхук
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}/api/bot`,
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to set webhook');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error setting webhook:', error);
    return NextResponse.json({ error: 'Failed to set webhook' }, { status: 500 });
  }
} 