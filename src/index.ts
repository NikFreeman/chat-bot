import "dotenv/config";
import { Telegraf } from "telegraf";
import { keyboard } from "./utils/keybord";
import { slabs } from "./controllers/slabs";
import { curbs } from "./controllers/curbs";
import { shapes } from "./controllers/shapes";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN is not set");
}
const bot = new Telegraf(token);
bot.start((ctx) => {
  console.log(ctx.chat, ctx.message);
  ctx.reply(`Welcome to my bot, ${ctx.from.first_name}!"`);
});
bot.hears("/catalog", async (ctx) => {
  console.log(ctx.chat, ctx.message);
  await ctx.reply("Каталог", keyboard);
});
// bot.on("text", async (ctx) => {
//   console.log(ctx.chat, ctx.message);
//   await ctx.reply(ctx.message.text);
// });
bot.hears("Плитка", (ctx) => {
  console.log(ctx.chat, "Плитка---> tut");
  slabs(ctx);
});
bot.hears("Бордюры", (ctx) => {
  console.log(ctx.chat, "Бордюры---> tut");
  curbs(ctx);
});
bot.hears("Формы", (ctx) => {
  console.log(ctx.chat, "Формы---> tut");
  shapes(ctx);
});
bot.launch();
