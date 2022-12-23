import sharp from 'sharp';
async function image_resize(imagePath, writePath, width, height) {
    const newWidth = width ? Math.abs(width) : undefined;
    const newHeight = height
        ? Math.abs(height)
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
