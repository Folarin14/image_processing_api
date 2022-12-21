// import {open} from 'node:fs/promises'

// const file = await open('test.txt')

// for await (const line of file.readLines()) {
//     console.log(line)
// }

import Jimp from 'jimp/*'
import sharp from 'sharp'

sharp('./images/fjord.jpg').resize(256).toFile('fjord_smaller.jpg')
// Jimp.read('../images/fjord.jpg')
//     .then(image => {

// })