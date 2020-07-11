const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('.config/keys');



const app = express();


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken);
   }
  )
);
//app.get('/',(req,res) => {
//res.send({Welcome: 'Solomon'});
//});


const PORT = process.env.PORT || 5000;
app.listen(PORT);