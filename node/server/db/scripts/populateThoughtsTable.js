import query from "../index.js";



async function populateThoughtsTable() {
    const thought = "I'm happy"
    const res = await query(
      `INSERT INTO thoughts (thought, date)
        VALUES ($1, $2) RETURNING thought`,
    [thought, "2022-01-18"]

    );
    console.log("Insert thoughts table", res);
  }

populateThoughtsTable();