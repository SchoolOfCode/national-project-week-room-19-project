import pg from "pg";

const pool = new pg.Pool({
  user: "aqryanrxhegvcj",
  host: "ec2-63-32-7-190.eu-west-1.compute.amazonaws.com",
  database: "d8stdgdsgonnsm",
  password: "d32b5ccf01050356385394d5c38fb6b4bd092fee5142510dddd6e26d241a4498",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
