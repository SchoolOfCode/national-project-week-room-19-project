import query from "../index.js";

const sqlString = 'CREATE TABLE IF NOT EXISTS thoughts (id SERIAL PRIMARY KEY, thought TEXT, date TEXT)';

async function createThoughtsTable(){
  const res = await query(sqlString);
  console.log("Create thoughts table", res);
}
createThoughtsTable();