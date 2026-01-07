import { OpenRouter } from "@openrouter/sdk"

//Similar to giving a supabase call to other routes
const key = process.env.OPEN_ROUTER_KEY

const openrouter = new OpenRouter({
    apiKey: key
});

export default openrouter //Makes it available to other sources