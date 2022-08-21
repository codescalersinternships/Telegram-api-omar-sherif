import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
dotenv.config();
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN + "";
const BOT = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
export { BOT, TelegramBot as TelegramBotType };
