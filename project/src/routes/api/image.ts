import express from 'express'
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const image = express.Router()


image.get('/', (req, res) => {

    console.log(req.path)
    const userQuery = req.query
    const fileName = userQuery.filename
    const imageFile = fileName+'.jpg'
    
    const width = parseInt(userQuery.width as string) || undefined
    const height = parseInt(userQuery.height as string) || undefined
    

    if (!width){
        res.sendFile(`./images/${imageFile}`, {root: __dirname})
        console.log("If block")
    }
    else {
        sharp(`./dist/routes/api/images/${imageFile}`)
                        .resize(width, height)
                        .toFile(`./dist/routes/api/images/${fileName}_resized.jpg`)
                        .then(info => {
                            console.log(info)
                            //res.sendFile(`C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\${fileName}_resized.jpg`)
                            res.sendFile(`./images/${fileName}_resized.jpg`, 
                            {root: __dirname, cacheControl: true, 
                            immutable:true, maxAge: 1800000}) //30 minutes for caching
                        })
        console.log("Else block")
    }

    console.log(userQuery)
    console.log(fileName)
    console.log(width)
    console.log(height)
    console.log("Image Route working...")
}, )

export default image