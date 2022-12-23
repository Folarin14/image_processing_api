import supertest from 'supertest';
import app from '../server.js';
import image_resize from '../utils/processing.js';

const request = supertest(app);

describe('Testing API Endpoints', () => {
	it('checks if the root endpoint is working', async () => {
		const response = await request.get('/api');
		expect(response.status).toBe(200);
		//done()
	});

	it('checks if the image api endpoint for resizing is working', async () => {
		const response = await request.get('/api/image');
		expect(response.status).toBe(200);
	});

	it('checks if a sample images actually resizes using width and height', async () => {
		const response = await request.get(
			'/api/image?filename=fjord&width=200&height=200'
		);
		expect(response.status).toBe(200);
	});
	it('checks if a sample images actually resizes using width only', async () => {
		const response = await request.get(
			'/api/image?filename=fjord&width=200'
		);
		expect(response.status).toBe(200);
	});
	it('checks if a sample images actually resizes using height only', async () => {
		const response = await request.get(
			'/api/image?filename=fjord&height=200'
		);
		expect(response.status).toBe(200);
	});
	it('checks if the resize function creates a new resized file', async () => {
		await image_resize(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\icelandwaterfall.jpg',
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_200x200.jpg',
			200,
			200
		);

		expect(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_200x200.jpg'
		).toBeTruthy();
	});
	it('checks if the resize function correctly resizes and saves file when negative width/height is passed', async () => {
		await image_resize(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\icelandwaterfall.jpg',
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_200x20.jpg',
			-200,
			-20
		);

		expect(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_200x20.jpg'
		).toBeTruthy();
	});
	it('checks if the resize function correctly resizes and saves file when only width is given', async () => {
		await image_resize(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\icelandwaterfall.jpg',
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_400xundefined.jpg',
			400,
			undefined
		);

		expect(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_400xundefined.jpg'
		).toBeTruthy();
	});
	it('checks if the resize function correctly resizes and saves file when only height is given', async () => {
		await image_resize(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\icelandwaterfall.jpg',
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_undefinedx300.jpg',
			undefined,
			300
		);

		expect(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_undefinedx300.jpg'
		).toBeTruthy();
	});
	it('checks if the resize function correctly resizes and saves file when height = 0', async () => {
		await image_resize(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\icelandwaterfall.jpg',
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_300x0.jpg',
			300,
			0
		);

		expect(
			'C:\\Users\\FAHD\\Desktop\\image_processing\\project\\dist\\routes\\api\\images\\resized\\test_icelandwaterfall_300x0.jpg'
		).toBeTruthy();
	});
});
