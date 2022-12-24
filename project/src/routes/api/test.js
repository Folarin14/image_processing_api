import path from 'node:path';
import { fileURLToPath } from 'node:url';
import checkFileExists from '../../../dist/utils/fs_utils.js'

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = path.dirname(__filename);
console.log(__dirname)



const imagePath = path.join('images', 'alex.jpg')
console.log(imagePath)
console.log(checkFileExists('./images/alex.jpg'))
console.log(checkFileExists(imagePath))

const fullPath = path.dirname(__filename)
const fullPathArray = fullPath.split(path.sep)

const imageFolderPath = fullPathArray.slice(0,-3).join("\\")
console.log(imageFolderPath)

const imageTest = path.normalize(imageFolderPath)//, 'images', 'alex.jpg')
console.log(imageTest)
console.log(checkFileExists(imageTest))