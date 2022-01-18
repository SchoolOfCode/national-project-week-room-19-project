import express from "express";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});