const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const bcrypt = require('bcrypt');
const users = require('users');

passport.use(new BasicStrategy(
    function (username, password, done) {
        const user = users.getUserByName(username)
        if (user == undefined) {
            console.log("user not found");
            return done(null, false, { message: "user not found"});
        }

        if (bcrypt.compareSync(password, user.password) == false) {
            console.log("password mismatch");
            return done(null, false, { message: "password mismatch"});
        }
        return done (null, user)
    }
))