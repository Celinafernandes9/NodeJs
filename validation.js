const joi = require('joi');

const register = (data)=>{
    const Schema = joi.object({
        name : joi.string().required().min().max(),
        email : joi.string().required().email(),
        name : joi.string().required().min(1000000000).max(9999999999),
        password : joi.string().required().min(5).max(8)
    })
    return Schema.validate(data)
}

const login = ()=>{
    const Schema = joi.object({
        email: joi.string().required().email(),
        password : joi.string().required().min(5).max(8)
    })
}
module.exports.register = register;
module.exports.login = login;