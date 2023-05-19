import { Configuration, OpenAIApi } from "openai";

// Before:
const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
})

// const openai = new OpenAIApi(
//     new Configuration({ apiKey: process.env.OPEN_API_KEY })
// );

const openai = new OpenAIApi(configuration)

export default openai;