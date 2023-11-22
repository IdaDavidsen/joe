// husk at køre "npm install" og "npm install express --save"

// 1. Oprettelse af Express-servere
const express = require("express");
const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();

const port1 = 3000;
const port2 = 3001;
const port3 = 3002;
const port4 = 3003;

app1.listen(port1, () => {
  console.log("Server 1 listening on port " + port1);
});

app2.listen(port2, () => {
  console.log("Server 2 listening on port " + port2);
});

app3.listen(port3, () => {
  console.log("Server 3 listening on port " + port3);
});

app4.listen(port4, () => {
  console.log("Server 4 listening on port " + port4);
});

// 2. Oprettelse af GET Endpoints
// Dette endpoint skal returnere en besked til klienten, der specificerer
// serverens adresse (localhost) og det portnummer, som HTTP requestet blev modtaget på.
// svar: da det er localhost er det det samme
app1.get("/", (req, res) => {
  res.send("Server 1 is running on port " + port1);
});

app2.get("/", (req, res) => {
  res.send("Server 2 is running on port " + port2);
});

app3.get("/", (req, res) => {
  res.send("Server 3 is running on port " + port3);
});

app4.get("/", (req, res) => {
  res.send("Server 4 is running on port " + port4);
});

// 3. Funktion til load balancer
// Lav en funktion, der returnerer, hvilken server et indgående HTTP request fra klienten skal videresendes til.
// For hver nyt HTTP request skal denne funktion vælge den næste server i rækkefølgen i forhold til de 4 servere, du definerede i starten.
// Udskriv (ved brug af console.log) den valgte serveradresse og portnummer, når funktionen kaldes.
