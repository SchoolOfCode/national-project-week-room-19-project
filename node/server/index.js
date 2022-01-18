// importing express from npm package manager
import express from "express";
// storing express function in a variable
const app = express();
// storing the specified port in a variable
const PORT = 3000;

// using the get method pre-recorded function inside express, specifying the path and req/res
app.get("/", function (req, res) {
  // send back a response of Hello World
  res.send("Hello World");
});
app.get("/message", function (req, res) {
  const data = {
    message: "Hello Gaia",
    instruction: "Don't kill Gaia",
  };
  res.json(data);
});

app.get("/lunch", function (req, res) {
  const data = {
    main: "Huel",
    dessert: "Vive bar",
    snack: "Apple",
  };
  res.json(data);
});


// listen to the expression function variable, assigning the port variable and a function as parameters
app.listen(PORT, function () {
  // log a message to the console to confirm it's listening at the port
  console.log(`Example app listening at http://localhost:${PORT}`);
});
