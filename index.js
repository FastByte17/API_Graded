const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.post('/register', (req, res) => {
  if ('username' in req.body == false ) {
    res.status(400);
    res.json({status: "username missing"})
    return;
  }
  if('password' in req.body == false) {
    res.status(400);
    res.json({status: "password missing"})
    return;
  }
  if ('email' in req.body == false) {
    res.status(400);
    res.json({status: "email missing"})
    return;
  }
})