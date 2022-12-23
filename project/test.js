// import { open } from 'node:fs/promises';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
import {accessSync, constants} from 'node:fs';

const testPath = "C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\icelandwaterfall_200x200_test.jpg"
// access(testPath, constants.F_OK, (err) => {
// 	console.log(`${testPath} ${err ? 'does not exist' : 'exist'}`);
//   });
function check(filePath) {

	try {
		accessSync(filePath, constants.F_OK);
		return true;
		
	} catch (error) {
		return false;
	}

	// if (accessSync(filePath, constants.F_OK)) {
	// 	return false;
	// }
	// else {
	// 	return true;
	// }
}

const result = check(testPath)
console.log(result)
// //const fs = require('node:fs/promises')

// const file = await open(
// 	'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\test.txt'
// );

// for await (const line of file.readLines()) {
// 	console.log(line);
// }
// // console.log(dirname())

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log(__filename);
// console.log(__dirname);

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
