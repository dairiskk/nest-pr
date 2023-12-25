import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import * as crypto from 'crypto'

describe('Post (e2e)', () => {
  it('can create post', async () => {
    await request("localhost:3000")
      .post('/post').send
      ({
        "title": "test title",
        "content": "TERE TERE",
        "authorId": 1
      })
      .expect(201)
  });

  it('can publish', async () => {
    await request("localhost:3000/post/publish/2")
      .put("").send()
      .expect(200)

    let res = await request("localhost:3000/post/feed")
      .get('').send()

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThanOrEqual(1)
  });
  it('can filter by title', async () => {
    let res = await request("localhost:3000/post")
      .get('/filtered-posts/test title').send()
      .expect(200)
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(1)
  });
  it('can filter by user id', async () => {
    let res = await request("localhost:3000/post/user/1")
      .get("").send()
      .expect(200)
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(1)
  });
});
