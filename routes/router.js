import { Router } from 'express'
import cityRouter from './city_router'

const router = Router()
router.use('/cities', cityRouter)

export default router
