import express from "express";
const router = express.Router();

router.post('/api/signup', (req,res)=>{
const {name,email,password} = req.body;

console.log("user signedup!",name, email);
res.status(200).json({message:"SignUp successfully!"});
});

router.post("/api/signin", (req, res) => {
const {email,password} = req.body;

console.log("User signin attempt", email);
res.status(200).json({message : "Singin sucessful!"})
});



export default router;