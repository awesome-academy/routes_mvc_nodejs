import express, { Request, Response } from 'express'
import { AppDataSource } from '../database/DatabaseConnection'
import { About } from '../models/database/About'
import { message } from '../constants/message'

const router = express.Router()

// Homer page route
router.get('/', (req: Request, res: Response) => {
  res.send('Home page')
})

// About page route with error
router.get('/about/error', (req: Request, res: Response) => {
  AppDataSource.getRepository(About)
    .find()
    .then(
      (about) => res.send(about),
      (err) => res.send(err)
    )
})

// About page route with catch error
router.get('/about/catch', (req: Request, res: Response) => {
  AppDataSource.getRepository(About)
    .find()
    .then((about) => res.send(about))
    .catch(next)
})

// About page route
router.post('/about', (req: Request, res: Response) => {
  res.send('About POST this tutorial')
})

function next(err: any) {
  throw new Error(message.catchError)
}

export default router
