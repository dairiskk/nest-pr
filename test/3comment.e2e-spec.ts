import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('Comment (e2e)', () => {
  it('can create', async () => {
    await request("localhost:3000")
      .post('/comment').send
      ({ "description": "test", "authorId": 1, "postId": 1 })
      .expect(201)
  });

  it('can get all', async () => {
    const res = await request("localhost:3000").get('/comment');
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThanOrEqual(1)
  });

  it('can get by id', async () => {
    const res = await request("localhost:3000")
      .get("/comment/1");

    expect(res.status).toBe(200)
    expect(res.body.id).toBeDefined()
  });

  it('can filter by user id', async () => {
    let res = await request("localhost:3000/comment/user/1")
      .get("").send()
      .expect(200)
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(1)
  });
});
