const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const news = bot.onText("/news", async (msg) => {
    const chatId = msg.chat.id;
    const apiKey = process.env.NEWS_API_KEY;
  
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      const articles = response.data.articles.slice(0, 5);
      let newsMessage = "Oxirgi yangiliklar:\n\n";
  
      articles.forEach((article, index) => {
        `newsMessage += ${index + 1}. ${article.title}\n${article.url}\n\n;`
      });
  
      bot.sendMessage(chatId, newsMessage);
    } catch (error) {
      bot.sendMessage(chatId, "Yangiliklarni olishda xatolik yuz berdi.");
    }
  });

  module.exports = { news }