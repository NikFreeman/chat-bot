import { Context } from "telegraf";
import dataCurbs from "../../data/curbs";

const curbs = (ctx: Context) => {
  dataCurbs.curbs.forEach(async (curb) => {
    const caption = `${curb.name} \n\n ${curb.description} \n\n Цена: ${curb.price} руб.`;
    await ctx.replyWithPhoto({ source: curb.img }, { caption: caption });
  });
};

export { curbs };
