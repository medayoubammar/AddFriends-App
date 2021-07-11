require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        // trying to connect to DB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
         console.log("connection to database succeed ! ");
        } catch (error) {
        // connexion failed
        console.error("connexion failed", error);
        process.exit(1);

    }    
}

module.exports = connectDB;
