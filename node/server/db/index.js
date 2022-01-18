import pg from "pg";

const pool = new pg.Pool({
  user: "ngbupjsstljwqo",
  host: "ec2-34-246-155-237.eu-west-1.compute.amazonaws.com",
  database: "dd8g76vfh1ia88",
  password: "2d6d04222ca6f765fb7715a601a3a0d98b0731a1879d155add3aec758957599d",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
