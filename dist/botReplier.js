import dotenv from 'dotenv';
dotenv.config();
import { BOT } from './bot.js';
const DEFAULT_CHILD = process.env.DEFAULT_CHILD + "";
class Bot {
    // Matches "/echo [whatever]"
    constructor() {
        // Create a bot that uses 'polling' to fetch new updates
        this.bot = BOT;
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
        if (chatId.length > 0) {
            this.bot.sendMessage(chatId, message);
        }
        else {
            this.bot.sendMessage(DEFAULT_CHILD, message);
        }
    }
}
new Bot();
