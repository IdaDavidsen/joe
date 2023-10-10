const chat = require("../../server/db/chat");

const socket = io();

const messages = document.getElementById("messages");
const input = document.getElementById("input");

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function sendChat() {
  if (input.value) {
    socket.emit("chat message", username + ": " + input.value);
    input.value = "";
  }
}

function changeUsername() {
  username = document.getElementById("username").value;

  if (username == "") {
    alert("Skriv et nyt brugernavn");
    return;
  } else document.cookie = `userAuth=${username}`;

  socket.emit("user joined", username);
  document.getElementById("username").value = "";
}

// Socket.io
// kan både bruges på client og server siden

let username = getCookie("userAuth");
if (!username) location.href = "/";

socket.emit("user joined", username ? username : "Anonymous"); // emit til at sende fra den ene til den anden

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  chatLog.push(msg);

  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
