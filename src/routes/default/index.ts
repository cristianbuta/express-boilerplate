import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  res.send('Post default route')
})

router.get('/', (req, res) => {
  res.send('Get Default route')
})

export default router
