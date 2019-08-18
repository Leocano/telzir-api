import pricingController from '../controllers/pricing_controller'
import Router from 'express';

const pricingRouter = Router()
pricingRouter.post('/', pricingController.create)
pricingRouter.get('/calculate', pricingController.calculate)

export default pricingRouter
