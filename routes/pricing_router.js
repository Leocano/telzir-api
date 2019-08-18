import pricingController from '../controllers/pricing_controller'
import Router from 'express';

const pricingRouter = Router()
pricingRouter.post('/', pricingController.create)

export default pricingRouter
