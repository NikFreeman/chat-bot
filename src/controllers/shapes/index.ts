import { Context } from "telegraf";
import dataShapes from "../../data/shapes";

const shapes = (ctx: Context) => {
  dataShapes.shapes.forEach(async (shape) => {
    const caption = `${shape.name} \n\n ${shape.description} \n\n Цена: ${shape.price} руб.`;
    await ctx.replyWithPhoto({ source: shape.img }, { caption: caption });
  });
};

export { shapes };
