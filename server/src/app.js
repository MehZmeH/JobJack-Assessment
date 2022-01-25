var http = require("http");
var fileSystemRouter = require(`./routers/FileSystem/FileSystem.router`);

var express = require("express");

var app = express();
app.use(express.json());

app.use("/directory", fileSystemRouter);

const httpServer = http
  .createServer(app)
  .listen("3000", () => console.log(`Server started on PORT:  3000`));
