require('dotenv').config()

const PORT = process.env.PORT || 5000;

const express = require('express');
const cors = require("cors");
const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

// // Middleware to log requests
app.use(middlewareLogRequest);
// // Middleware to parse JSON bodies of incoming requests
app.use(express.json());
app.use(cors())
app.use('/users', usersRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})
