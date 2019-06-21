const request = require('supertest');
const router = require('./router.js');

describe('router.js', () => {
    describe('GET /', () => {
        it('should respond with 200 OK', async () => {
            const response = await request(router).get('/');
            expect(response.status).toBe(200);
        });
        it('should return json', async () => {
            const response = await request(router).get('/');
            expect(response.type).toBe('application/json');            
        });
        it('should return an array', async () => {
            const response = await request(router).get('/');
            expect(response.isArray()).toBeTruthy();
        });
    });
    describe('POST /', () => {
        it('should create and send back a post', async () => {
            const response = await request(router)
                .post('/')
                .send({ username: 'user19', description: 'description19' });
            expect(response.body.username).toBeTruthy();
        });
    });
    describe("DEL /id", () => {
        it('should delete the post', async () => {
            const posts = await request(router).get('/');
            const removePost = await request(router).del('/1');
            const posts2 = await request(router).get('/');
            expect(posts.length - posts2.length).toBe(1);
        });
        it('should send back the deleted post', async () => {
            const response = await request(router).del('/2');
            expect(response.body.username).toBeTruthy();
        });
    });
});