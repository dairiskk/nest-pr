import * as request from 'supertest';

describe('Comment (e2e)', () => {
  it('can create', async () => {
    await request('localhost:3001')
      .post('/comment')
      .auth('123', { type: 'bearer' })
      .send({ description: 'test', authorId: 1, postId: 1 })
      .expect(201);
  });

  it('can get all', async () => {
    const res = await request('localhost:3001')
      .get('/comment')
      .auth('123', { type: 'bearer' });
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it('can get by id', async () => {
    const res = await request('localhost:3001')
      .get('/comment/1')
      .auth('123', { type: 'bearer' });

    expect(res.status).toBe(200);
    expect(res.body.id).toBeDefined();
  });

  it('can filter by user id', async () => {
    const res = await request('localhost:3001/comment/user/1')
      .get('')
      .auth('123', { type: 'bearer' })
      .send()
      .expect(200);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(1);
  });
});
