const express = require('express')
const colors = require('colors');

const app = express();


app.get('/',(req,res)=>{
    res.send('Hello Express')

})

app.listen(3000,(req,res)=>{
    console.log('MySql Is Running'.bgMagenta.white)
})