import pg from "pg";

const pool = new pg.Pool({
      user: "postgres",
      password: "maksmaks",
      host: "localhost",
      port: 5432,
      database: "lr5"
});

export default pool;