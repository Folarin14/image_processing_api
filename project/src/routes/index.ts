import express from 'express'
import image from './api/image.js'

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Root API route')
})

routes.use('/image', image)


export default routes