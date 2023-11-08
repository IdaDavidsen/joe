const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()

// Skriv følgende i Terminal eller Kommandoprompt for at generere testcertifikater:

// openssl genrsa -out privkey.pem 1024
// openssl req -new -key privkey.pem -out certreq.csr
// openssl x509 -req -days 3650 -in certreq.csr -signkey privkey.pem -out newcert.pem

const options = {
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('newcert.pem')
}

app.get("*", (req, res) => {
    res.end("Thanks for calling securely!")
})

https.createServer(options, app).listen(443, () => {
    console.log("HTTPS server listening on port 443")
})