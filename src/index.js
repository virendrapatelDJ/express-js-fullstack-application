const express = require("express");
const initializeApp = require("./app");
const app = express();

app.use((request, response, next) => {
  console.log(`${request.method} : ${request.url}`);
  next();
});

initializeApp(app);

app.listen(3000, () => {
  console.log("Server is working...");
});
