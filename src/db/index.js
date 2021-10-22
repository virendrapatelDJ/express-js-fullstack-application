function createConnection() {
  const mongoose = require("mongoose");
  return mongoose.connect(
    "mongodb://localhost:27017/expressjs-demo-live-student-db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

module.exports = { createConnection };
