const posts = require('./posts-model.js');
const db = require('../data/dbConfig.js');

describe("posts model", () => {
    beforeEach(async () => {
        await db("posts").truncate();
    });
    it('should create the provided post', async () => {
        await posts.create({
            username:"Kylo-Ren",
            description: 'I am the force. Also, this BE stuff isn too bad'
        });
        const postlist = await db("posts");
        expect(postlist).toHaveLength(1);
    });
    it('should retrieve post by id', async () => {
        
    });
    it('should retrieve all posts', async () => {
        
    });
    it('should delete the post by id', async () => {
        
    });
    it('should edit the post', async () => {
        
    });
})