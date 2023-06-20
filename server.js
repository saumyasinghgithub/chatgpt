const express = require("express");
const dotenv = require("dotenv");
const openai = require('openai');
const openaiInstance = new openai.OpenAI("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");
const app = express();
const port = 3003
app.listen(port,()=>{
    console.log(`Your app running on ${port}`);
});