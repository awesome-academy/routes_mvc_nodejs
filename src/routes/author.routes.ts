import { Router } from 'express'
import * as author_controller from '../controllers/author.controller'

const router: Router = Router()

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/create', author_controller.author_create_get)

// POST request for creating Author.
router.post('/create', author_controller.author_create_post)

// GET request to delete Author.
router.get('/:id/delete', author_controller.author_delete_get)

// POST request to delete Author.
router.post('/:id/delete', author_controller.author_delete_post)

// GET request to update Author.
router.get('/:id/update', author_controller.author_update_get)

// POST request to update Author.
router.post('/:id/update', author_controller.author_update_post)

// GET request for one Author.
router.get('/:id', author_controller.author_detail)

// GET request for list of all Authors.
router.get('/list', author_controller.author_list)

export default router
