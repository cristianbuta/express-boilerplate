import { Router } from 'express'
import defaultRouter from './default'

const router = Router()

router.use('/default', defaultRouter)

export default router
