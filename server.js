const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')

// 
app.use(express.json());
app.use(cors());
dotenv.config(); 


// connection to the database 
const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 
});

// Retrieve all patients


// Retrieve all providers


// Filter patients by first name


// Retrieve all providers by specialty

// Check if there is a connection 
db.connect((err, connection) => {
    // If no connection 
    if(err) return console.log("Error connecting to MYSQL");
 //If connect works successfully
 console.log("Connected to MYSQL as id: ", db.threadId); 
}) 

// listen to the server
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})

// Start the server 
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);

    // Sending a message to the browser 
    console.log('Sending message to browser...');
    app.get('/', (req,res) => {
        res.send('Server Started Successfully!');
    });

});