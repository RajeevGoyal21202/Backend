const { User } = require('../models');

exports.getAll = async()=>{
    return await User.findAll();
}

exports.getById = async(payload)=>{
    const user_id = payload.params.id
    console.log(user_id)
    return User.findOne({ where: { id: user_id } })
}
exports.update = async(payload)=>{
    const previousField = payload.
}