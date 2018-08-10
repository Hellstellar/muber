const assert = require('assert');
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Driver = mongoose.model('driver');

describe('Driver Controller', () => {

  it('Makes post request to api/create', (done) => {
    Driver.countDocuments()
      .then(count => {
        request(app)
          .post('/api/drivers')
          .send({ email: 'test@test.com' })
          .end(() => {
            Driver.countDocuments()
              .then(newCount => {
                assert(count + 1 === newCount)
                done();
              })
          })
      })
  })

  it('makes a put request to api/drivers to edit', done => {
    const driver = new Driver({ email: 't@t.com' })
    driver.save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end((err, res) => {
            assert(res.body.driving === true)
            done();
          })
      })
  })

  it('delete request to api/drivers to delete', done => {
    const driver = new Driver({ email: 'test@test.com' });

    driver.save()
      .then(() => {
        request(app)
          .delete(`/api/drivers/${driver._id}`)
          .end(() => {
            Driver.findOne({ email: 'test@test' })
              .then(driver => {
                assert(driver === null)
                done();
              })
          })

      })
  })

})
