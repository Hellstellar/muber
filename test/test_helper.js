const mongoose = require('mongoose');

before( done => {
    mongoose.connect('mongodb://localhost:27017/muber_test', { useNewUrlParser: true })
    mongoose.connection
            .once('open', () => {
                console.log("Connection successful to test database")
                done();
            })
            .on('error', (err) => {
                console.warn(err)
            })
})

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
          drivers.drop()
            .then(() => done())
            .catch(() => done())
})