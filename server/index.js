const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')
const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(PORT))