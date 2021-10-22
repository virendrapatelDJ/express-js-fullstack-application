const { name, internet, random, datatype } = require("faker");
const { number } = random;
const { firstName, lastName, gender } = name;
const { avatar, email } = internet;

function generateStudents(count) {
  return new Array(count).fill(0).map((item, index) => {
    return {
      id: datatype.uuid(),
      firstName: firstName(),
      lastName: lastName(),
      email: email(),

      age: number(45),
    };
  });
}

module.exports = { generateStudents };
