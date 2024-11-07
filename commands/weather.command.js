const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const weather = bot.onText("/weather", async (msg) => {
    const chatId = msg.chat.id;
    const location = "Toshkent";
    const apiKey = process.env.OPENWEATHER_API_KEY;
  
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const weather = response.data;
  
      bot.sendMessage(
        chatId,
        `Ob-havo ma'lumoti: 🌡 Harorat: ${weather.main.temp}°C ☁️ Holati: ${weather.weather[0].description}`
      );
    } catch (error) {
      bot.sendMessage(chatId, "Ob-havo ma'lumotini olishda xatolik yuz berdi.");
    }
  });

  module.exports = { weather }