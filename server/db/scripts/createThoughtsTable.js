import query from "../index.js";

// This code was change data type for 'date' - DATE to TIMESTAMP
// const sqlString = "ALTER TABLE thoughts ALTER COLUMN date TYPE TIMESTAMP";

const sqlString =
  "CREATE TABLE IF NOT EXISTS thoughts (id SERIAL PRIMARY KEY, thought TEXT, date TIMESTAMP)";

async function createThoughtsTable() {
  const res = await query(sqlString);
  console.log("Create thoughts table", res);
}
createThoughtsTable();
