// const mysql = require("mysql");
// const dotenv = require("dotenv");

// dotenv.config();

// const db = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });

// db.connect((err) => {
//     if (err) {
//         console.log(`Error connecting to the DataBase ${err}`);
//     } else {
//         console.log(`Connected To the DataBase`);
//     }
// });

// module.exports = db;


const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

// Database connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

// Connection check
db.connect((err) => {
    if (err) {
        console.error(`Error connecting to the DataBase: ${err.message}`);
    } else {
        console.log(`Connected to the Database`);
    }
});

// Ensure db connection works
db.ping((err) => {
    if (err) {
        console.error("Error during ping: ", err.message);
    } else {
        console.log("Ping successful!");
    }
});

module.exports = db;
