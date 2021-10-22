const { Student } = require("../../models/student");

const express = require("express");
const apiRouter = express.Router();

apiRouter.get(
  "/students",
  ({ query: { sortBy, firstName, age } }, response) => {
    const filter = {};

    if (firstName) {
      filter.firstName = firstName;
    }
    if (age) {
      filter.age = age;
    }

    Student.find(filter)
      .sort(sortBy)
      .then((students) => {
        response.json({ students });
      });
  }
);

module.exports = { apiRouter };
