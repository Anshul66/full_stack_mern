const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const authonticate = require("../middleware/authonticate");
require('../db/conn');
const User = require('../model/userSchema');
router.get('/', (req, res) => {
    res.send('Hello world from the server rotuer jsA');
});
/*
//using Promises
router.post('/register', (req, res) => {
   const {name , email, phone, work,password,cpassword}= req.body;
   if(!name || !email || !phone || !work || !password || !cpassword){
       return res.status(422).json({error:"Fill the section"});
   }
   User.findOne({ email: email})
   .then((userExist) => {
       if(userExist){
        return res.status(422).json({error:"Email Alredy Exist"});
       }
       const user = new User({name , email, phone, work,password,cpassword});
       user.save().then(() => {
           res.status(201).json({message: "Successfuly registered"});
       }).catch((err) => res.status(500).json({error:"Please try again"}));
   }).catch(err => {console.log(err); });
});
*/
//Using Asc..
router.post('/register',async (req, res) => {
    const {name , email, password,cpassword}= req.body;
    if(!name || !email  || !password || !cpassword){
        return res.status(422).json({error:"Fill the section"});
    }
    try{
        const userExist = await User.findOne({email:email });
        if(userExist){
            return res.status(422).json({error:"Email Alredy Exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password Not match"});
        }else{
            const user = new User({name , email, password,cpassword});
            await user.save();
        } 
       
        res.status(201).json({message: "Successfuly registered"});
    }
    catch(err){
        console.log(err);
    }
});
//Login Rout
router.post('/signin', async(req,res) => {
  //  console.log(req.body);
  //  res.json({message:"Sign IN successfuly"});
  try{
      let token;
      const{email,password} = req.body;
      if(!email || !password){
          return res.status(400).json({error :"Please fill data"})
      }
      const userLogin = await User.findOne({email:email});
      //console.log(userLogin);

      if(userLogin){
        const isMatch = await (password,userLogin.password);
        token  =await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token, {
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        })
        if(!isMatch){
            res.status(400).json({error:"Not Sign IN"});
        }else{
          res.json({message:"Sign IN successfuly"});
        }
      }else{
        res.json({message:"Sign IN successfuly"});
      }

      

  }catch(err){
      console.log(err);
  }
})

//About us
router.get('/about',authonticate, (req,res) =>{
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

router.get('/Logout', (req,res) =>{
    console.log(`Hello my About`);
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Log out');
});

router.get('/getdata', authonticate, (req,res) =>{
    console.log(`Hello my About`);
    res.send(req.rootuser);
});
module.exports = router;



