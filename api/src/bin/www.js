#!/usr/bin/env node
/**
 * Module dependencies.
 */
// import debug from "debug";
// import http from "http";
// import app from "../app";
var app = require("../app");
var http = require("http");
/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
server.listen(port);

// next code block goes here
