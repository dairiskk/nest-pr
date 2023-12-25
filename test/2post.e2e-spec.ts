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
    await request("localhost:3000")
      .put('/publish/2').send()
      .expect(200)

    let res = await request("localhost:3000")
      .get('/feed').send()

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(1)
  });

  it('can filter by title', async () => {
    let res = await request("localhost:3000")
      .get('/filtered-posts/test title').send()
      .expect(200)
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(1)
  });
});
