// Create web server using express
// Created: 07/10/2021
// Updated: 07/10/2021
// Creator: Connor Reed
// Purpose: To create a web server that can be used to send and recieve comments from the front end
//          The comments are stored in a MongoDB database

// Import express module
const express = require('express');
// Import cors module
const cors = require('cors');
// Import mongoose module
const mongoose = require('mongoose');
// Import dotenv module
const dotenv = require('dotenv');
// Import comment model
const Comment = require('./models/Comment');

// Create express app
const app = express();
// Use cors to allow cross origin requests
app.use(cors());
// Use express.json() to parse json data
app.use(express.json());
// Use dotenv to read .env file
dotenv.config();

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB');
});

// Create route to get all comments
app.get('/comments', async (req,