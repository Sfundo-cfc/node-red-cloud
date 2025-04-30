const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/",
  userDir: "./.nodered/",
  functionGlobalContext: {},
  ui: { path: "/ui" }
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 3000);

RED.start();
