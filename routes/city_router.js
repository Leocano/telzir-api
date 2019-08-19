import cityController from '../controllers/city_controller'
import Router from 'express';

const cityRouter = Router()
cityRouter.post('/', cityController.create)
cityRouter.get('/', cityController.index)

export default cityRouter
