// commands used in terminal
    // npm init 
    // npm install express 
    // npm install pug 
    // nodemon ./app.js

const express = require('express');
const path=require('path');
const pug = require('pug');
const app=express();

const port=80;

app.use('/static',express.static('static')); // for serving static files

app.set('view engine','pug');

app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('home',{title:'home',message:'home'});
})

app.get('/about',(req,res)=>{
    res.status(202).render('home',{title:'about',message:'about'});
})

app.get('/services',(req,res)=>{
    res.status(400).render('home',{title:'services',message:'services'});
})

app.post('/contact',(req,res)=>{
    res.status(70).render('home',{title:'contact us',message:'contact us'});
})

app.listen(port,()=>{
    console.log(`app listning at port ${port}`)
})




