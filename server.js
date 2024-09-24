const express = require('express'); //used to create web server and handle routing
const cors = require('cors');
const dotenv = require('dotenv'); //load environment variable for store password, port like that sensitive
const DBConnection = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); //load the MongoDB connection URI (MONGO_URI) and the port (PORT) for the server
DBConnection(); //establish a connection to the MongoDB database using the connection string stored in process.env.MONGO_URI




const app = express(); //used to set up middleware and routes, and start the server
app.use(cors()); //allow API to be accessed from other domains or ports 
app.use(express.json()); //middleware -It allows you to access req.body when handling POST or PUT requests that send JSON data.



app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
