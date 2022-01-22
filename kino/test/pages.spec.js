
import request from 'supertest';
import app from '../src/app.js';


test('Showing us list of movies', async () =>{
    const response = await request(app)
    .get('/movies')
    .expect(200);
    expect(response.text.includes('The Dark Knight')).toBeTruthy();

}) 


test('Details of movies', async () =>{
    const response = await request(app)
    .get('/movies/4')
    .expect(200);

    expect(response.text.includes('The Dark Knight')).toBeTruthy();
   
}) 



test('Details of movies', async () =>{
    const response = await request(app)
    .get('/movies/1')
    .expect(200);

    expect(response.text.includes('Shawshank')).toBeTruthy();
}) 
