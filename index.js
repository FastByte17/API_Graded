const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
//const users = require('./routes/users');
//const pass = require('./routes/pass');
const plant = require('./routes/plants');

app.set('port', (process.env.PORT || 80));

app.use('/plants', plant);

app.get('/', (req,res) => {
  res.send('plants retrieved')
})

/*app.get('protectedRoute',
 pass.authenticate('basic', { session: false }),
(req, res) => {
  res.json({
    yourProtectedResource: "profit"
  });
});

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

  const hashedPassword = bcrypt.hashSync(req.body.password, 6);
  users.addUser(req.body.username, req.body.email, hashedPassword);
  res.status(201).json({ status: 'a user was created' });
})*/

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'))
})
require('dotenv').config()