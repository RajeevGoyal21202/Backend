const { User } = require('../models');
exports.register = async(payload,res)=>{
    const { name,email,password} = payload.body;
    if(!name){
        throw ({error:"name not found"})
    }
    if(!email){
        throw ({error:"email not found"})
    }
    if(!password){
        throw ({error:"password not found"})
      
    }

    const user =  await User.findOne({ where: { email:email } })
    if(user){
        throw ({error:"User already exist in database"})
    }

    const newUser = await User.create({name,email,password});
    return {res:newUser}



}