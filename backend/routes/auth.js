import express from "express";
import { registerUser } from "../controllers/userController.js";
const router = express.Router();

router.post('/api/signup', registerUser);

router.post("/api/signin", (req, res) => {
const {email,password} = req.body;

console.log("User signin attempt", email);
res.status(200).json({message : "Singin sucessful!"})
});



export default router;