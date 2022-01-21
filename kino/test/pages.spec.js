
import request from 'supertest';
import app from '../src/app.js';


test('Showing us movie list', async () =>{
    const response = await request(app)
    .get('/')
    .expect(200);
}) 