const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 3003
app.listen(port,()=>{
    console.log(`Your app running on ${port}`);
});