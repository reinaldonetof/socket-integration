const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const redis = require("socket.io-redis");
io.adapter(redis());

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.get("/sendmsg", (req, res) => {
  io.emit("msg", req.query);
  res.send({ ok: true });
});

app.get("/sendmsg", (req, res) => {
  io.emit("msg", req.query);
  res.send({ ok: true });
});

http.listen(3000, () => {
  console.log("Socket.io integration...");
});
