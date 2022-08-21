import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
dotenv.config();
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN + "";
const DEFAULT_CHILD = process.env.DEFAULT_CHILD + "";
class Bot {
    // Matches "/echo [whatever]"
    constructor() {
        // Create a bot that uses 'polling' to fetch new updates
        this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
        this.bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
            if (match) {
                const chatId = msg.chat.id;
                console.log(chatId);
                const resp = match[1]; // the captured "whatever"
                // send back the matched "whatever" to the chat
                this.bot.sendMessage(chatId, resp);
            }
        });
        // Listen for any kind of message. There are different kinds of
        // messages.
        this.bot.on('message', (msg) => {
            const chatId = msg.chat.id;
            // send a message to the chat acknowledging receipt of their message
            this.bot.sendMessage(chatId, 'Received your message');
        });
        this.bot.on('polling_error', (err) => {
            console.log(err);
        });
        this.bot.on('error', (err) => {
            console.log(err);
        });
    }
    sendMessage(chatId, message) {
        if (chatId) {
            this.bot.sendMessage(chatId, message);
        }
        else {
            this.bot.sendMessage(DEFAULT_CHILD, message);
        }
    }
}
export default new Bot();
