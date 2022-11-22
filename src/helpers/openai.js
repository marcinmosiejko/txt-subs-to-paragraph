import { Configuration, OpenAIApi } from 'openai';

console.log(process.env.REACT_APP_OPENAI_TOKEN);

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_TOKEN,
});
const openai = new OpenAIApi(configuration);

export const getOpenAiResponse = async (instruction, payload) => {
  const prompt = instruction + '\n' + payload;

  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: prompt,
    temperature: 0,
    max_tokens: 1999,
  });

  return response;
};
