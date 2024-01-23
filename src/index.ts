import express, { Router, Request, Response } from 'express'
import tutorial from './routes/tutorial'
import { AppDataSource } from './database/DatabaseConnection'
import { message } from './constants/message'
import genreRouter from './routes/genre.routes'
import authorRouter from './routes/author.routes'
import bookRouter from './routes/book.routes'
import bookInstanceRouter from './routes/bookinstance.routes'

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

app.use('/genre', genreRouter)
app.use('/author', authorRouter)
app.use('/book', bookRouter)
app.use('/book-instance', bookInstanceRouter)

app.listen(port, () => {
  console.log(message.port.running(port))
})
