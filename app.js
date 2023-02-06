const express = require("express");
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 
require('dotenv').config();

// import routes
const userRoutes = require('./routes/user');
const cookieParser = require("cookie-parser");
 
// app
const  app = express();

// db
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
}).then(()=> console.log('DB Connected'));
mongoose.set('strictQuery', false);
// middleares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// routes middlewares
app.use("/api",userRoutes);

const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=> {
  console.log(`Server is runnig on port ${PORT}`)
});
