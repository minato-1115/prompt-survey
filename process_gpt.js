const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({ apiKey: process.env.apiKey });

async function main() {
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          " あなたは高校レベルの英文法問題を作成するアシスタントです。問題を作成と正しい解答を出力してください。出力形式はjsonです。キー値はquestionとanswerとしてください",
      },
      {
        role: "user",
        content:
          "高校レベルの問題を作成してください。高めの難易度から出題してください。出題問題はto不定詞を扱ってください。並び変え形式で１０～２０単語で作成してください。解答例も提示してください。toとほかの単語は切り離してください",
      },
    ],
    stream: true,
    max_tokens: 50,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main();
