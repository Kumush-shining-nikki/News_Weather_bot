const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const menu = bot.onText("/menu", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const response = await axios.get(`https://sheetdb.io/api/v1/j7c0mwmpmmhe1/search?chatId=${chatId}`);
    const user = response.data;
  
    if (["O'zbek", "Русский", "English"].includes(text)) {
      await User.findOneAndUpdate({ userId: msg.from.id }, { language: text });
    }
  
    switch (text) {
      case "uz":
        bot.sendMessage(chatId, "Tanlangan til: O'zbek", {
          reply_markup: {
            keyboard: [
              ["Ob-havo", "Yangiliklar", "Profil", "Telefon kirishini yuborish"],
            ],
            resize_keyboard: true,
          },
        });
        break;
      case "ru":
        bot.sendMessage(chatId, "Выбранный язык: Русский", {
          reply_markup: {
            keyboard: [
              ["Погода", "Новости", "Профиль", "Отправить номер телефона"],
            ],
            resize_keyboard: true,
          },
        });
        break;
      case "en":
        bot.sendMessage(chatId, "Selected language: English", {
          reply_markup: {
            keyboard: [["Weather", "News", "Profile", "Send Phone Number"]],
            resize_keyboard: true,
          },
        });
        break;
    }
  });

  module.exports = { menu }