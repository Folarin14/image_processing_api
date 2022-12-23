import sharp from 'sharp';

async function image_resize(
	imagePath: string,
	writePath: string,
	width: number | undefined,
	height: number | undefined
) {
	const newWidth = (width as number) ? Math.abs(width as number) : undefined;
	const newHeight = (height as number)
		? Math.abs(height as number)
		: undefined;
	console.log(newWidth, newHeight);

	await sharp(imagePath).resize(newWidth, newHeight).toFile(writePath);
}
//return Promise.resolve(Object); Promise<object>

export default image_resize;

// if ((width as number) < 0) {
// 	newWidth = Math.abs(width as number);
// }
// if ((height as number) < 0) {
// 	newHeight = Math.abs(height as number);
// }
