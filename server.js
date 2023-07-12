const app = require('./app');
// const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, PORT } = process.env;


console.log(DB_HOST);
console.log(PORT);




app.listen(3000, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});