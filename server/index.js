require('dotenv').config();

const { PORT, NODE_ENV } = process.env;

const path = require('path');
const express = require('express');
const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '9bd47386c81440bc8174a51f21076ce0',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use('/assets', express.static(path.join(__dirname, '../client/assets')))
app.get("/Hello", (req, res) => {
    world()
})

app.get('*', (req, res) => {
  const htmlFilePath = path.resolve(__dirname, '..', 'client', 'index.html');

  res.sendFile(htmlFilePath);
});

app.listen(PORT, () => {
  if (NODE_ENV === 'development') {
    console.log(`Server running on http://localhost:${PORT}/`);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});