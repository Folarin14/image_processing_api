import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import image_resize from '../../utils/processing.js';
import checkFileExists from '../../utils/fs_utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const image = express.Router();

image.get('/', (req, res): void => {
	const userQuery = req.query;
	const fileName = userQuery.filename;
	const imageFile = fileName + '.jpg';

    //check if file name exists
    const fullPath = `C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\${imageFile}`
    if (checkFileExists(fullPath)){

        const width = parseInt(userQuery.width as string) || undefined;
        const height = parseInt(userQuery.height as string) || undefined;
    
        if (userQuery.filename && !userQuery.width && !userQuery.height) {
            console.log('If Block');
            res.sendFile(`./images/${imageFile}`, { root: __dirname });
        } else if (req.query.filename && (width || height)) {
            console.log('Else if block');
            console.log(width);
            console.log(height);
            // before resizing, check if file already exists then serve it, else resize afresh
            const queryImage = `C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\${fileName}_${width}x${height}.jpg`;
            if (checkFileExists(queryImage)) {
                res.sendFile(queryImage);
            } else {
                console.log('Else if block - else block');
                image_resize(
                    `./dist/routes/api/images/${imageFile}`,
                    `./dist/routes/api/images/resized/${fileName}_${width}x${height}.jpg`,
                    width,
                    height
                ).then(() => {
                    res.sendFile(
                        `./images/resized/${fileName}_${width}x${height}.jpg`,
                        {
                            root: __dirname,
                            // cacheControl: true,
                            // immutable: true,
                            // maxAge: 60000,
                        }
                    );
                });
            }
        } else {
            res.send('Image API active');
        }
    }

    else{
        res.send("Specified filename does not exist. Verify image exists then try again ")
    }


});

export default image;
