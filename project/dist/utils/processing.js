import sharp from 'sharp';
async function image_resize(imagePath, writePath, width, height) {
    const newWidth = width ? Math.abs(width) : undefined;
    const newHeight = height
        ? Math.abs(height)
        : undefined;
    return await sharp(imagePath).resize(newWidth, newHeight).toFile(writePath);
}
export default image_resize;
