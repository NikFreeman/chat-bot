import { Context } from "telegraf";
import dataSlabs from "../../data/slabs";

const slabs = (ctx: Context) => {
  dataSlabs.slabs.forEach(async (slab) => {
    const caption = `🔎 ${slab.name} \n\n ${slab.description} \n\n Цена: ${slab.price} руб.`;
    await ctx.replyWithPhoto({ source: slab.img }, { caption: caption });
  });
};

export { slabs };
