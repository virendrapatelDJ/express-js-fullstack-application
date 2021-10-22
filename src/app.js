const express = require("express");
const swig = require("swig");
const { createConnection } = require("./db");
const { homeRouter, studentRouter, apiRouter } = require("./routers");

module.exports = (app) => {
  createConnection().then(() => {
    console.log("Mongo DB connected...");
  });

  swig.setDefaults({
    cache: false,
  });

  app.use(express.static("public"));
  app.engine("html", swig.renderFile);
  app.set("views", "src/views");
  app.set("view engine", "html");

  app.use(express.urlencoded());
  app.use(homeRouter);
  app.use(studentRouter);
  app.use("/api", apiRouter);
};
