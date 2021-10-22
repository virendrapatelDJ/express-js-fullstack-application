const express = require("express");
const { studentController } = require("../controllers");
const studentRouter = express.Router();

const { createStudent, showAllStudents, showStudentForm } = studentController;

studentRouter.get("/add-students", showStudentForm);
studentRouter.post("/add-students", createStudent);
studentRouter.get("/all-students", showAllStudents);

module.exports = { studentRouter };
