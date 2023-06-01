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
app.set('views',path.join(__dirname,'views'));   // render will try to find files first in views // to exit views (current) directory we use ../ 

app.get('/',(req,res)=>{
    res.status(200).render('home',{title:'home',message:'home'});
})

app.get('/about',(req,res)=>{
    res.status(202).render('home',{title:'about',message:'about'});
})

app.get('/services',(req,res)=>{
    res.status(400).render('home',{title:'services',message:'services'});
})

// app.get('/services',(req,res)=>{
//     res.status(400).render('services');
// })

// app.get('/services',(req,res)=>{
//     res.status(400).render('../static/services');
// })

app.get('/contact',(req,res)=>{
    res.status(200).render('../static/contact');
})

// app.post('/contact',(req,res)=>{
//     res.status(200).render('../static/contact');
// })

app.listen(port,()=>{
    console.log(`app listning at port ${port}`)
})




