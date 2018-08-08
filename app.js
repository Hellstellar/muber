const app = require('express')();

app.get('/api', (req, res) => {
    res.send({ hi: 'there'})
})

module.exports = app;