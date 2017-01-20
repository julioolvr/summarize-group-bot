const TelegramClient = require('node-telegram-bot-api');

const db = require('./db');

class App {
  start() {
    const telegramClient = new TelegramClient(process.env.BOT_TOKEN, { polling: true });

    telegramClient.on('message', message => {
      db.insert(message, err => {
        if (err) {
          console.log('Error storing message', err);
        }
      });
    });
  }
}

module.exports = App;
