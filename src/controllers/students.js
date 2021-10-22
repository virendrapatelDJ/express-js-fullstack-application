const { Student } = require("../models/student");

const showStudentForm = (request, response) => {
  response.render("add-student");
};

const createStudent = async (request, response) => {
  const student = request.body;
  try {
    await Student.create(student);
    response.render("add-student", { message: "Student Created " });
  } catch (err) {
    const error = Object.values(err.errors)[0].properties.message;
    response.render("add-student", { error });
  }
};

const showAllStudents = async (request, response) => {
  let view = request.query.view || "card";
  const students = await Student.find();
  response.render("all-students", { students, view });
};

module.exports = { showStudentForm, createStudent, showAllStudents };
