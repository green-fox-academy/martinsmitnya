'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');
describe('GET given response', () => {
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