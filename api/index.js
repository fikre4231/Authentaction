import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO).then(() => console.log('DB connected')).catch(err => console.log(err))


const app = express()
app.listen(5000, () => console.log('Server started on port 5000!!'))

app.use('/api/users', userRoutes )