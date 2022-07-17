import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import routes from './routes'

const { PORT } = process.env

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 10 minutes
  max: 1000, // Limit each IP to 1000 requests per `windowMs`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(limiter)
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`)
})
