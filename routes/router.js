import { Router } from 'express'
import cityRouter from './city_router'
import pricingRouter from './pricing_router'
import dddCodeRouter from './ddd_code_router'

const router = Router()
router.use('/cities', cityRouter)
router.use('/pricings', pricingRouter)
router.use('/ddd-codes', dddCodeRouter)

export default router
