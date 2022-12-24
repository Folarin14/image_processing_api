import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import image_resize from '../../utils/processing.js';
import checkFileExists from '../../utils/fs_utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const image = express.Router();

image.get('/', (req: express.Request, res: express.Response): void => {
	const userQuery = req.query;
	const fileName = userQuery.filename;
	const imageFile = fileName + '.jpg';

	//check if file name exists
	const fullPath = path.join(__dirname, 'images', `${imageFile}`);
	if (checkFileExists(fullPath)) {
		const width = parseInt(userQuery.width as string) || undefined;
		const height = parseInt(userQuery.height as string) || undefined;

		if (userQuery.filename && !userQuery.width && !userQuery.height) {
			res.sendFile(path.join(__dirname, 'images', `${imageFile}`));
		} else if (req.query.filename && (width || height)) {
			// before resizing, check if file already exists then serve it, else resize afresh
			const queryImage = path.join(
				__dirname,
				'images',
				'resized',
				`${fileName}_${width}x${height}.jpg`
			);
			if (checkFileExists(queryImage)) {
				res.sendFile(queryImage);
			} else {
				image_resize(
					path.join(__dirname, 'images', `${imageFile}`),
					path.join(
						__dirname,
						'images',
						'resized',
						`${fileName}_${width}x${height}.jpg`
					),
					width,
					height
				).then(() => {
					res.sendFile(
						path.join(
							__dirname,
							'images',
							'resized',
							`${fileName}_${width}x${height}.jpg`
						)
					);
				});
			}
		}
	} else {
		res.send(
			'Image API is active but image is not specified or does not exist. Verify image, then try again'
		);
	}
});

export { image, __dirname };
