const TelegramBot = require("node-telegram-bot-api");
const mongoose = require("mongoose");
const SheetDB = require("sheetdb-node");
require("dotenv").config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Mongodbga ulanish
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB muvaffaqiyatli ulandi!');
  })
  .catch((error) => {
    console.error('MongoDBga ulanishda xatolik:', error);
  });

// Sheetdbga ulaish
const SHEETDB_API_URL = process.env.SHEETDB_API_URL;
const sheetdb = new SheetDB({ address: SHEETDB_API_URL });

// start
bot.onText()




// bot.on("callback_query", async (callbackQuery) => {
//   const chatId = callbackQuery.message.chat.id;
//   const userId = callbackQuery.from.id;
//   const lang = callbackQuery.data; // Assuming callback_data is just the lang code

//   await User.updateOne({ userId }, { language: lang });

//   const messages = {
//     uz: "Til tanlandi! Najmite /menu dlya perexoda v menyu.",
//     ru: "Язык выбран! Нажмите /menu для перехода в меню.",
//     en: "Language selected! Press /menu to go to the menu.",
//   };

//   bot.sendMessage(chatId, messages[lang]);
// });

// bot.onText("/register", async (msg) => {
//   const userId = msg.from.id;
//   const user = await User.findOne({ userId });

//   if (user) {
//     await sheetdb.create({
//       userId: user.userId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       username: user.username,
//       language: user.language,
//     });
//     bot.sendMessage(chatId, "Ma'lumotlar yuklandi.");
//   }
// });

console.log("Bot ishga tushdi ...");