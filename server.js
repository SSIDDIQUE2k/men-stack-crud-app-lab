const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}` );
} );
  //IMPORT ROUTES
const ASI= require('./models/asi.js');

//middleware

app.use(express.urlencoded({ extended: false }));

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });

//get /asi/new
// server.js
app.get("/asi",async (req, res) => {
    const allasi = await ASI.find();
    console.log(allasi)
    res.render('asi/index.ejs', {asi: allasi})
})

app.get('/asi', (req, res) => {
    res.send('This route renders the index page for ASI')
})


// GET /asi/new
// app.get("/asi/new", (req, res) => {
//     res.render("asi/new.ejs");
  // });
  app.get('/asi/:ASIId',  async (req, res) => {
    res.send(`This route renders th show page for the ASI id: ${req.params.asiId}`)
  })
// POST /asi
app.post("/asi", async (req, res) => {
       if(req.body.isReadyToEat === "on") {
        req.body.isReadyToEat = true;
        } else {
        req.body.isReadyToEat = false;
        }
        await ASI.create(req.body);
        
    res.redirect("asi/new");
  });
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});