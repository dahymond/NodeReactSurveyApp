const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



const app = express();


passport.use(new GoogleStrategy());
//app.get('/',(req,res) => {
//res.send({Welcome: 'Solomon'});
//});


const PORT = process.env.PORT || 5000;
app.listen(PORT);