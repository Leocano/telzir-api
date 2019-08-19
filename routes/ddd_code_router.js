import dddCodeController from '../controllers/ddd_code_controller'
import Router from 'express';

const dddCodeRouter = Router()
dddCodeRouter.post('/', dddCodeController.create)

export default dddCodeRouter
