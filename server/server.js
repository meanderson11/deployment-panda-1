const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

//middleware
app.use('/js', express.static(path.join(__dirname, 'public/main.js')))