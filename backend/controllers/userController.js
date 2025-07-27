import User from "../models/User.js";
import bcrypt from "bcrypt";


const registerUser = async (req, res) =>{

    const {name,email,password} = req.body;

    try{
         const userExist = await User.findOne({email});

        if (userExist){
            return res.status(400).json({message : "Use already exist!"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password : hashedPassword
        })

        res.status(201).json({
            message: 'User registered successfully!'
        })
    }
    catch(error){
       console.log("Failed to signup!",error);
       res.status(500).json({message: "Server is not responding!"})
    }
}

export {registerUser};