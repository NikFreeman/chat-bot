import { Markup } from "telegraf";

export const keyboard = Markup.keyboard([
  ["Плитка"],
  ["Бордюры"],
  ["Формы"],
  //["🔎 Поиск","🔙 Назад"],
])
  .oneTime()
  .resize();
