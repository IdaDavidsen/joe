// indsæt dine egne API nøgler fra twilio.com/console
const accountSid = 'ACc2ecb851998e35xxxxxxxxxxxxxxxxxxxxxx';
const authToken = 'f9b9519762d58xxxxxxxxxxxxxxxxxxxxxx';
const client = require('twilio')(accountSid, authToken);

// https://www.twilio.com/docs/whatsapp/quickstart/node
client.messages
    .create({
        body: 'Din bestilling med 1 Orange Smash er modtaget og klar til afhentning om 15 minutter. Hilsen JOE.',
        from: 'whatsapp:+141552xxxxx',
        to: 'whatsapp:+45xxxxxxxx'
    })
    .then(message => console.log(message))