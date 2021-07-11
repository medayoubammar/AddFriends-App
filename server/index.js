require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./db");
const routes = require('./routes')
//connection to database 
connectDB();
//PORT
const PORT = process.env.PORT || 3001;

//routing

app.use('/',routes)

// listening for server side
app.listen(PORT, () => {
    console.log(`You are connecting on PORT ${PORT}`);
})