const express = require('express');
const app = express();

const port = 80;

app.get('/',(req,res) =>{
    res.send('this is get hompage of my first express app');
})

app.get('/services',(req,res) =>{
    res.status(404).send('this is get services page of my first express app');
})

app.post('/projects',(req,res) =>{
    res.status(202).send('this is post projects page of my first express app');
})

app.get('/contact',(req,res) =>{
    res.status(200).send('this is get contact page of my first express app');
})

app.post('/about',(req,res) =>{
    res.send('this is post about page of my first express app');
})

app.get('/this',(req,res) =>{
    res.status(400).send('this page does not exist');
})

app.post('/this',(req,res) =>{
    res.status(404).send('this page does not exist');
})

app.listen(port, () => {
    console.log(`server running at port ${port}`);
})