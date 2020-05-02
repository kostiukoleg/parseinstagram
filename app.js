const express = require('express');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(keys.mongoURI).then(()=>console.log('Mongo DB connected')).catch(error=>console.log(error));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

module.exports = app;