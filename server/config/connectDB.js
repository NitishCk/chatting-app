const mongoose = require("mongoose")

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        
        const connection = mongoose.connection

        connection.on('Connected', () => {
            console.log("Connected to DB")
        })

        connection.on('error', () => {
            console.log("Failed to establish connection with MongoDB",error)
        })

    } catch (error) {
        console.log("Connection is Unsuccessful", error)
    }
}

module.exports = connectDB