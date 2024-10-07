import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO).then(() => console.log('DB connected')).catch(err => console.log(err))


const app = express()
app.use(express.json())
app.listen(5000, () => console.log('Server started on port 5000!!'))

app.use('/api/users', userRoutes )
app.use('/api/auth', authRoutes )

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';  
  return res.status(status).json({
    success: false,
    status,
    message
  })
})