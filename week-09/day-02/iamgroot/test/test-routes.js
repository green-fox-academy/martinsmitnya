'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');

describe('My tests title: /GET request to /groot?message=totallyNotGroot', () => {
  it('With giving a parameter the status is ok, and the given response is the same as expected', (done) => {
    request(app)
    .get('/groot?message=totallyNotGroot')
    .expect(200)

    .end((err, res) => {
      expect(err).to.be.null;
      expect(res.body.received).to.equal('totallyNotGroot')
      done();
    })
  })
})

describe('title: testing without parameters', () => {
  it('Without giving a parameter the status is not ok, and the given error response is the same as expected', (done) => {
    request(app)
    .get('/groot')
    .expect(500)

    .end((err, res) => {
      expect(err).to.be.null;
      expect(res.body.error).to.equal('I am Groot!');
      done();
    })
  })
})