import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// console.log("process.env.JWT_SECRET_KEY", process.env.JWT_SECRET_KEY);

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
  // check if user exists in db 
  // if user exists tell them to login


    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user) return res.status(401).json({ message: "User Already Exist" });

// otherwise continue the flow
  // HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);
  // CREATE USER AND STORE IN DB

    const newuser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ 
        message: "User created successfully", 
        user: newuser 
    });

} catch (err) {
    console.log("🚀 ~ register ~ err:", err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // CHECK IF THE USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    // GENERATE A COOKIE TOKEN AND SEND TO USER
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successful", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(204).json({message:"Logout successful"})
};
