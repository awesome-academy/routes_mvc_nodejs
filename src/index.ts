import express from 'express'
import tutorial from './routes/tutorial'
import { AppDataSource } from './database/DatabaseConnection'
import { message } from './constants/message'

// Connect DB
AppDataSource.initialize()
  .then(() => {
    console.log(message.db.success)
  })
  .catch((err) => {
    console.error(message.db.error, err)
  })

const app = express()
const port = process.env.PORT || 3000

app.use('/tutorial', tutorial)

app.listen(port, () => {
  console.log(message.port.running(port))
})
