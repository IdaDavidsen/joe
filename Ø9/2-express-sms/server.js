const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

// https://www.twilio.com/docs/messaging/tutorials/how-to-receive-and-reply/node-js
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('JOE har modtaget din besked. Vi vender tilbage hurtigst muligt.');

  res.type('text/xml').send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
