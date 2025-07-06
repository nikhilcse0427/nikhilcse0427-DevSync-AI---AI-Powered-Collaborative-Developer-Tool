import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import userRoutes from './routes/user.route.js'

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send("<h1>Server is running</h1>")
})

export default app;

