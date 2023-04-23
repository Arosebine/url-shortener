const mongoose = require('mongoose');



const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to database');
    } catch (error) {
        console.log("Url database connection failed");
    }
}

module.exports = connectDB;