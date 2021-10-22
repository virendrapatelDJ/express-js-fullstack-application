const express = require("express");
const {
  homeController: { showHomePage },
} = require("../controllers");
const { studentRouter } = require("./students");
const { apiRouter } = require("./api/student");
const homeRouter = express.Router();

homeRouter.get("/", showHomePage);

module.exports = { homeRouter, studentRouter, apiRouter };
