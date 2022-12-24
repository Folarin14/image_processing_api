import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import image_resize from '../../utils/processing.js';
import checkFileExists from '../../utils/fs_utils.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const image = express.Router();
image.get('/', (req, res) => {
    const userQuery = req.query;
    const fileName = userQuery.filename;
    const imageFile = fileName + '.jpg';
    console.log(userQuery);
    if (JSON.stringify(userQuery) === '{}') {
        console.log('If block');
        res.send('Image API active');
    }
    //check if file name exists
    const fullPath = path.join(__dirname, 'images', `${imageFile}`);
    if (checkFileExists(fullPath)) {
        const width = parseInt(userQuery.width) || undefined;
        const height = parseInt(userQuery.height) || undefined;
        if (userQuery.filename && !userQuery.width && !userQuery.height) {
            res.sendFile(path.join(__dirname, 'images', `${imageFile}`));
        }
        else if (req.query.filename && (width || height)) {
            // before resizing, check if file already exists then serve it, else resize afresh
            console.log('Else if block - should not be here');
            const queryImage = path.join(__dirname, 'images', 'resized', `${fileName}_${width}x${height}.jpg`);
            if (checkFileExists(queryImage)) {
                res.sendFile(queryImage);
            }
            else {
                image_resize(path.join(__dirname, 'images', `${imageFile}`), path.join(__dirname, 'images', 'resized', `${fileName}_${width}x${height}.jpg`), width, height).then(() => {
                    res.sendFile(path.join(__dirname, 'images', 'resized', `${fileName}_${width}x${height}.jpg`));
                });
            }
        }
    }
    else {
        res.send('Specified filename does not exist. Verify image exists then try again ');
    }
});
export { image, __dirname };
