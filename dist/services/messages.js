import { BOT } from '../bot.js';
class Message {
    constructor() {
        this.bot = BOT;
    }
    goodMorning() {
        console.error('Good morning');
        this.bot.sendMessage('', 'Good morning');
    }
    goodNight() {
        this.bot.sendMessage('', 'Good night');
    }
    message(message) {
        this.bot.sendMessage('', message);
    }
}
export default Message;
