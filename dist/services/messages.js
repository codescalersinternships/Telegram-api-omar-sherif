let bot;
class Message {
    constructor(bot) {
        bot = bot;
    }
    goodMorning() {
        bot.sendMessage('', 'Good morning');
    }
    goodNight() {
        bot.sendMessage('', 'Good night');
    }
}
export default Message;
