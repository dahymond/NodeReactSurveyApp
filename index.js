const express = require('express');
const mongoose = require('mongoose');
const keys = require('/config/keys');
const { mongoURI } = require('./config/keys');
require('./services/passport');


mongoose.connect('mongodb+srv://dahymond:<password>@survey.mfttu.mongodb.net/<dbname>?retryWrites=true&w=majority');


const app = express(mongoURI);

require('./routes/authRoutes')(app);


//app.get('/',(req,res) => {
//res.send({Welcome: 'Solomon'});
//});



const PORT = process.env.PORT || 5000;
app.listen(PORT);