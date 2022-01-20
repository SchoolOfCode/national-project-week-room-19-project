import express from "express";
import query from "./db/index.js";
import cors from "cors";

// storing express function in a variable
const app = express();
// storing the specified port in a variable
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

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
  console.log("got request for all thoughts");
  const allThoughts = await query("SELECT * FROM thoughts;");
  res.json(allThoughts.rows);

  // res.json({ success: true, message: `all thoughts`, payload: thoughts });
});

app.post("/thoughts", async function (req, res) {
  console.log(`Got post message ${JSON.stringify(req.body)}`);
  const date = new Date();

  const queryresult = await query(
    `INSERT INTO thoughts (thought, date)
        VALUES ($1, $2) RETURNING thought`,
    [req.body.description, date]
  );
  console.log("Insert thoughts table", queryresult);
});

// listen to the expression function variable, assigning the port variable and a function as parameters
app.listen(PORT, function () {
  // log a message to the console to confirm it's listening at the port
  console.log(`Example app listening at http://localhost:${PORT}`);
});
