// import {open} from 'node:fs/promises'
import sharp from 'sharp';
sharp('./images/fjord.jpg').resize(256).toFile('fjord_smaller.jpg');
// Jimp.read('../images/fjord.jpg')
//     .then(image => {
// })
