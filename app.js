const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const userRoutes = require('./routes/user');
 
// app
const  app = express();

// db
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
}).then(()=> console.log('DB Connected'));

// routes middlewares
app.use("/api",userRoutes);

const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {
  console.log(`Server is runnig on port ${PORT}`)
});
