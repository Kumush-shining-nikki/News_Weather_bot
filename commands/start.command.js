const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const start = bot.onText("/start", async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const existingUser = await User.findOne({ userId });
    // const response = await axios.get(`https://sheetdb.io/api/v1/j7c0mwmpmmhe1`,);
    const user = await axios.get(`https://sheetdb.io/api/v1/j7c0mwmpmmhe1`).data;
  
    if (!existingUser) {
      await User.create({
        userId,
        firstName: msg.from.first_name,
        lastName: msg.from.last_name,
        username: msg.from.username,
      });
  
      await bot.sendMessage(chatId, "Tilni tanlang:", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🇺🇿 O'zbekcha", callback_data: "uz" }],
            [{ text: "🇷🇺 Русский", callback_data: "ru" }],
            [{ text: "🇬🇧 English", callback_data: "en" }],
          ],
        },
      });
      
    } else {
      if (user && user.language) {
      switch(user.language) {
        case "uz":
          bot.sendMessage(
            chatId,
            "Yana xush kelibsiz! /menu orqali menyuga o'ting."
          );
          break;
  
        case "ru":
          bot.sendMessage(
            chatId,
            "Добро пожаловать! Зайдите в меню через /menu."
          );
          break;
  
        case "en":
          bot.sendMessage(
            chatId,
            "Welcome back! Go to the menu via /menu."
          );
          break; 
      }
    }
  }
  });

  module.exports = { start }