const request = require('supertest');
const server = require('../server.js');
const db = require('../data/dbConfig.js');

describe('server.js', () => {
    beforeEach(async () => {
        await db("posts").truncate();
    });
    describe('GET /', () => {
        it('should respond with 200 OK', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);
        });
        it('should return json', async () => {
            const response = await request(server).get('/');
            expect(response.type).toBe('application/json');            
        });
        it('should return an array', async () => {
            const response = await request(server).get('/');
            expect(Array.isArray(response.body)).toBeTruthy();
        });
    });
    describe('POST /', () => {
        it('should create and send back a post', async () => {
            const response = await request(server)
                .post('/')
                .send({ username: 'user19', description: 'description19' });
            expect(response.body.username).toBeTruthy();
        });
    });
    describe("DEL /id", () => {
        it("should delete the post", async () => {
         await request(server)
            .post("/")
            .send({ username: "user19", description: "description19" });
        await request(server)
            .post("/")
            .send({ username: "user20", description: "description20" });
        const posts = await request(server).get("/");
        const removePost = await request(server).del("/1");
        const posts2 = await request(server).get("/");
        const diff = posts.body.length - posts2.body.length;
        expect(diff).toBe(1);
        });

        it("should send back the deleted post", async () => {
        await request(server)
            .post("/")
            .send({ username: "user19", description: "description19" });
        await request(server)
            .post("/")
            .send({ username: "user20", description: "description20" });
        const response = await request(server).del("/1");
        expect(response.body.username).toBeTruthy();
        });
  });
});