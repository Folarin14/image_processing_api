import { open } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// //const fs = require('node:fs/promises')

const file = await open(
	'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\test.txt'
);

for await (const line of file.readLines()) {
	console.log(line);
}
// console.log(dirname())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

// import Image from 'image-js';

// async function loadImage() {
//     let image = await Image.load('')
// }

// import Image from 'image-js'

// // let image = await Image.load('images/fjord.jpg')
// // Image.lo
// // console.log(image)

// async function loadImage() {
//     let image = await Image.load('images/fjord.jpg')

//     return image
// }

// loadImage()

// import {parse, stringify} from 'qs';

// let obj = parse('?filename=fjord&wdith=200&4height=200')
// console.log(obj)
