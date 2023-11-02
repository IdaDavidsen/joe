// indsæt dine egne API nøgler fra twilio.com/console
const accountSid = 'ACc2ecb851998e35xxxxxxxxxxxxxxxxxxxxxx';
const authToken = 'f9b9519762d58xxxxxxxxxxxxxxxxxxxxxx';
const client = require('twilio')(accountSid, authToken);

// https://www.twilio.com/docs/sms/api/message-resource
client.messages
    .create({
        body: 'Hey det er JOE. I dag er der tilbud på Juicen. Kom ind i vores cafe og prøv den.',
        messagingServiceSid: 'MG2ca7006f9f31e8cxxxxxxxxxxxxxxxxxxxxxx',
        to: '+45xxxxxxxx'
    })
    .then(message => console.log(message))