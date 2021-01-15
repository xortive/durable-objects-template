import slug from "slug.txt";
import isOdd from "is-odd";
import { Counter } from "./counter.mjs";

// in order for the workers platform to find the class that implements
// our durable object namespace, we must re-export it from the root module.
export { Counter };

export default {
    async fetch(request, env) {
        try {
            return await handleRequest(request, env);
        } catch (e) {
            return new Response(e.message)
        }
    }
}

async function handleRequest(request, env) {
    let id = env.Counter.idFromName("A");
    let obj = env.Counter.get(id);
    let resp = await obj.fetch(request.url);
    let count = await resp.text();

    return new Response(slug + " " + count + (isOdd(count) ? " is odd" : " is even"));
}