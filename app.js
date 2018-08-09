const app = require('express')();
const bodyParser = require('body-parser')
const routes = require('./Routes/routes')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost:27017/muber', { useNewUrlParser: true })
    mongoose.connection
            .once('open', () => console.log('Connection successful to database'))
            .on('error', (err) => {
                console.warn(Warning, err);
            })
}


app.use(bodyParser.json())
app.use('/api', routes)
app.use((err, req, res, next) => {
    res.status(422).json({ error: err.message })
})

module.exports = app;