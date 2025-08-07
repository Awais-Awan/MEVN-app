import express from "express";
import { registerUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
const router = express.Router();

router.post('/api/signup', registerUser);

router.post("/api/signin", loginUser);



export default router;