import supertest from "supertest";
import app from '../server.js';
const request = supertest(app);
describe('Testing Root API Endpoint', () => {
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
        const response = await request.get('/api/image?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
    });
    it('checks if a sample images actually resizes using width only', async () => {
        const response = await request.get('/api/image?filename=fjord&width=200');
        expect(response.status).toBe(200);
    });
    it('checks if a sample images actually resizes using height only', async () => {
        const response = await request.get('/api/image?filename=fjord&height=200');
        expect(response.status).toBe(200);
    });
});
