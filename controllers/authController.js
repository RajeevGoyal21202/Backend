const authService = require("../services/authService")
exports.register = async(req,res)=>{
    try{
        const response = await authService.register({body: req.body});
        return res.status(201),send(response);
    }
    catch(error){
        console.log("Error in registering user",error);
        return res.status(400).send(error)

    }
}

// exports.login = async(req,res)=>{
//     try{
//         const response = await authService.login({body:req.body});

//     }
//     catch(error){
//         console.log("Error in login",error)
//     }

// }
