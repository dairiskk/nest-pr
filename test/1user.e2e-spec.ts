import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import * as crypto from 'crypto'

describe('User (e2e)', () => {
  it('can register', async () => {
    await request("localhost:3001")
      .post('/user/register').send
      ({ "password": "test", "email": crypto.randomUUID() + "@adwdad.tv" })
      .expect(201)
  });
});
