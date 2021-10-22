const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { String, Number },
} = Schema;

const studentSchema = new Schema({
  email: String,
  firstName: {
    type: String,
    minLength: 4,
    maxLength: 20,
  },
  lastName: {
    type: String,
    minLength: 4,
    maxLength: 20,
  },
  age: {
    type: Number,
    min: 18,
    max: 60,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
