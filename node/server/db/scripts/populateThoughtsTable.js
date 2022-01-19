import query from "../index.js";

async function populateThoughtsTable() {
  const thought = "I'm tired"; // this will be e.target.value
  // - Getting value from React(frontend) using fetch() to send data to Node(backend)
  const date = new Date();

  const res = await query(
    `INSERT INTO thoughts (thought, date)
        VALUES ($1, $2) RETURNING thought`,
    [thought, date]
  );
  console.log("Insert thoughts table", res);
}

populateThoughtsTable();
