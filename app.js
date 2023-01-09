const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

// app
const  app = express();

// db
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useCreateIndex:true
})

// routes
app.get("/", (req, res)=> {
  res.send("hello from node")
});

const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {
  console.log(`Server is runnig on port ${PORT}`)
});

