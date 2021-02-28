const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');

const imageUpload = require('./routes/images');

app.use('/uploadImage', imageUpload);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})