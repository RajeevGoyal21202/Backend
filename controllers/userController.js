const userService = require("../services/userService")

exports.getAll = async(req,res)=>{
    try{
        const response = await userService.getAll({body: req.body});
        return res.status(200).send(response);
    }
    catch(error){
        console.log("Error in getting  user",error);
        return res.status(400).send(error)
    }
}

exports.getById = async(req,res)=>{
    try{
        const response = await userService.getById(req);
        return res.status(200).send(response);
    }
    catch(error){
        console.log("Error in getting  user",error);
        return res.status(400).send(error)
    }
}
