import query from "../index.js";

export async function getAllThoughts() {
  const data = await query(`SELECT * FROM thoughts;`);
  return data.rows;
}
