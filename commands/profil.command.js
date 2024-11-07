const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const profil = bot.onText("/profile", async (msg) => {
    const chatId = msg.chat.id;
    const user = await User.findOne({ userId: msg.from.id });
  
    if (user) {
      bot.sendMessage(
        chatId,
       ` Profilingiz: 👤 Ism: ${user.firstName} 👤 Familiya: ${ 
        user.lastName || "Yo'q"
        } 💬 Foydalanuvchi nomi: @${user.username || "Yo'q"}  🌐 Til: ${
          user.language || "Tanlanmagan"
        } ☎️ Telefon: ${user.phone || "Yo'q"}`
      );
    }
  });

  module.exports = { profil }