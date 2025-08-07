import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Use already exist!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    console.log("Failed to signup!", error);
    res.status(500).json({ message: "Server is not responding!" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password!" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );


    res.status(200).json({message : "Login Successful!",
        token,
        user : {
            id : user._id,
            name : user.name,
            email : user.email,
        }
    })

  } catch (error) {
    console.error("Login Error!", error);
    res.status(500).json({message : "Server error during login."})
  }
};

export { loginUser };
export { registerUser };
