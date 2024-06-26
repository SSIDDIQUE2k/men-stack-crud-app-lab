//  dotenv is a zero-dependency module that 
//loads environment variables from a .env file into process.env.
const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected'); // Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
    }  );

// GET /

app.get('/', async (req, res) => {
    res.render('index.ejs');
    }   ); 

app.listen(3000, () => {
    console.log('server started');
    }); 