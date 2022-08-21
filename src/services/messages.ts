import { BOT } from '../bot.js';
class Message {
    bot = BOT;


    goodMorning() {
        this.bot.sendMessage('', 'Good morning');
    }
    goodNight() {
        this.bot.sendMessage('', 'Good night');
    }
    message(message: string) {
        this.bot.sendMessage('', message);
    }
    weekendMessage() {
        this.bot.sendMessage('', "It's the weekend, have a nice weekend");
    }
}


export default Message;