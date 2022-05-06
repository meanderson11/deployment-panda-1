require('dotenv').config();

const {PORT, NODE_ENV} = process.env;

const express = require('express');
const cors = require('cors');
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

const port = process.env.PORT || 4040;

app.listen(port, () => {
    console.log(`We have blast off ${port}`);
});