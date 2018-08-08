const assert = require('assert');
const request = require('supertest');
const app = require('../app')

describe('Express app', () => {
    it('makes a get request to root route', (done) => {
        request(app)
                .get('/api')
                .end((err, res) => {
                    assert(res.body.hi === 'there')
                    done();
                })
    })
})