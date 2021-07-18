import { createConnection } from "typeorm";
import Category from "./models/Category";
import Drawing from "./models/Drawing";
import Subcategory from "./models/Subcategory";
import User from "./models/User";

export default async function boot() {
    let dbConn = await createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Drawing, Category, Subcategory, User]
    }); 

    console.log(`Connected to: ${dbConn.name}`);

    return dbConn;
}