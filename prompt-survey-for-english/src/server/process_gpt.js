const express = require("express");
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"dist")))
app.get("/api/chat", (req, res) => {
  res.send("このエンドポイントはGETリクエストには対応していません。POSTリクエストを使用してください。");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.post("/api/chat",async(req,res)=>{
  //console.log("リクエストを受信",req.body)
  const {messages} = req.body;
  console.log(messages)
  const API_KEY = process.env.API_KEY
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization : `Bearer ${API_KEY}`
        },
        body:JSON.stringify({
          model: "gpt-4o-mini",
          messages:messages,
          max_tokens:50
        })
      }
    )
   const data = await response.json()
   console.log("API応答:", data);
   res.status(200).json(data)
  }
  catch(error){
    console.error(`${error}が発生。apiの通信に失敗`)
    res.status(500).json({error:"エラーが発生しました"})
  }
})


app.listen(PORT, () => {
  console.log(`サーバーが起動しました。http://localhost:${PORT}`);
});

