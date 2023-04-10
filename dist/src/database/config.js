import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pg.Pool;
var configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ssl: false
};
if (process.env.mode === "prod")
    configDatabase.ssl = true;
export var db = new Pool(configDatabase);
