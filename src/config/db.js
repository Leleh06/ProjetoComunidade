import mysql, { createConnection } from "mysql2/promise.js"

export const db = await createConnection({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "conecta"
})