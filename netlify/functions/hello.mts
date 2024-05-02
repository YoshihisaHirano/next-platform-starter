import type { Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
    const name = Netlify.env.get("NAME");
    return new Response(`Hello, ${name || "world"}!`);
};
