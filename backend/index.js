var express = require('express');
const route = require('./routes/routes');
require('./DBConfig');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,POST,PUT')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    next()
})
const PORT = process.env.PORT || 4000;
app.use('/', route)
app.listen(PORT, () => {
    console.log('App listening on port 4000..');
})