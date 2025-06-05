import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected ✅ ")
    app.listen(PORT,() => {
        console.log(`app is running at http://localhost:${PORT}`)
    })
}).catch((err) => console.error("❌ MongoDB Error:",err))
