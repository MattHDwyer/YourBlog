const LocalStrategy = require('passport-local').Strategy;
const { bcrypt, passport } = require('../app-utilities')

const User = require('../models/User')

passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email,password,done) => {
    // User Validation
    User.findOne({ email: email })
    .then(user => {
      if(!user) {
        return done(null, false, { message: 'That email is not registered!' });
        }

        // Password Validation
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err;

          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect!"})
          }
        });
      })
      .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  module.exports = passport

