import  "dotenv/config";
import { Telegraf } from "telegraf";
import { keyboard } from "./utils/keybord";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {throw new Error("TELEGRAM_BOT_TOKEN is not set"); }
const bot = new Telegraf(token);
bot.start((ctx) => {
    console.log(ctx.chat, ctx.message);
    ctx.reply(`Welcome to my bot, ${ctx.from.first_name}!"`);});
bot.hears("/catalog", async (ctx) => {
    console.log(ctx.chat, ctx.message);
    await ctx.reply("Каталог",keyboard);
})
bot.on("text", async (ctx) => {
    console.log(ctx.chat, ctx.message);
    await ctx.reply(ctx.message.text);
})
bot.launch()
