import { Router } from 'express'
import controller from '../controllers/thingController'

const router = Router()

router
  .post('/', controller.create)
  .get('/', controller.get)
  .put('/:id', controller.update)
  .delete('/:id', controller.delete)

export default router
