const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({path: './config.env'});
require('./db/conn');
//const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;



/*
app.get('/about', (req,res) =>{
    console.log(`Hello my About`);
    res.send('Hello about world from the server');
});
*/
app.get('/contact', (req,res) =>{
    res.send('Contacts');
});
app.get('/signin', (req,res) =>{
    res.send('Sign IN please');
});
app.get('/login', (req,res) =>{
    res.send('Log In please');
});
app.listen(5000, () => {
    console.log(`server is runnig at ${PORT}`);
})
