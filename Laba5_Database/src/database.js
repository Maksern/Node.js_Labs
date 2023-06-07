import pg from "pg";

const pool = new pg.Pool({
      user: "postgres",
      password: "maksmaks",
      host: "localhost",
      port: 5432,
      database: "test_database"
});

export default pool;