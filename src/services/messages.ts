let bot: any;
class Message {
    constructor(bot: any) {
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