const express = require('express');
const path = require('path');
const { listenerCount } = require('process');
const app=express();

const port = 80;

app.use(express.urlencoded());

app.get('/', (req,res) =>{
    res.status(200).sendFile(path.join(__dirname+'/form.html'));
});

app.post('/', (req, res)=> {
    console.log(req.body);
    res.status(200).sendFile(path.join(__dirname+'/form.html'));    
  });

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});