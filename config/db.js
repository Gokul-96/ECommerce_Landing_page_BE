const mongoose = require('mongoose'); //library import

//db connection 
const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); //stop the appication
  }
};

module.exports = DBConnection;
