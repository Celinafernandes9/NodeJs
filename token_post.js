const route = require('express').Router();

const verify = require('./token');

route.post('/', verify, (req, res) => {
    res.json({
        post :{
            title: 'JWT token',
            description: 'First token'
        }
    })
})
module.exports = route;