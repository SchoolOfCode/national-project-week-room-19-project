import express from "express";
import query from "./db/index.js";
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

// // Get all thougths
// app.get("/thoughts", async function (req, res) {
//   // const thought = req.query.thought;
//   const thoughts = await getAllThoughts();

//   res.json({ success: true, message: `all thoughts`, payload: thoughts });
// });

// Get all thougths2
app.get("/thoughts", async function (req, res) {
  try {
    const allThoughts = await query("SELECT * FROM thoughts;");
    res.json(allThoughts.rows);
  } catch (error) {
    console.error(error.message);
  }

  // res.json({ success: true, message: `all thoughts`, payload: thoughts });
});

// listen to the expression function variable, assigning the port variable and a function as parameters
app.listen(PORT, function () {
  // log a message to the console to confirm it's listening at the port
  console.log(`Example app listening at http://localhost:${PORT}`);
});
