const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const router = require('express').Router();
require('dotenv').config();
const Contact = require('./models/contact.model');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection success.");
})

app.get('/', (req, res) => {
    res.send('test');
});

app.post('/add', async (req, res) => {

    // create user object and save into mongodb
    const contact = new Contact({
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        message: req.body.message
    });
    
    await contact.save((err) => {
        if (err) {
            console.log('There was an error saving the user.', err);
        } else {
            res.json({message: "Successfully saved contact"});
        }
    });
    
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});