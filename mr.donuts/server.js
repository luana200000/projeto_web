const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
  return res.send('Gosto muito de donuts')
})

app.listen(port,()=>{
  console.log(`Servidor aberto | http://localhost:${port}`)
})