import express from 'express';
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const image = express.Router();
image.get('/', (req, res) => {
    console.log(req.path);
    const userQuery = req.query;
    const fileName = userQuery.filename;
    const imageFile = fileName + '.jpg';
    const width = parseInt(userQuery.width) || undefined;
    const height = parseInt(userQuery.height) || undefined;
    if (req.query.filename && !width) {
        res.sendFile(`./images/${imageFile}`, { root: __dirname });
    }
    else if (req.query.filename && (width || height)) {
        sharp(`./dist/routes/api/images/${imageFile}`)
            .resize(width, height)
            .toFile(`./dist/routes/api/images/${fileName}_resized.jpg`)
            .then(() => {
            res.sendFile(`./images/${fileName}_resized.jpg`, { root: __dirname, cacheControl: true,
                immutable: true, maxAge: 1800000 }); //30 minutes for caching
        });
    }
    else {
        res.send("Image API active");
    }
});
export default image;
