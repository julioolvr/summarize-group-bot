const TelegramClient = require('node-telegram-bot-api');

class App {
  start() {
    const telegramClient = new TelegramClient(process.env.BOT_TOKEN, { polling: true });

    telegramClient.on('message', message => {
      console.log('got message', message)
    });
  }
}

module.exports = App;
