import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPassword });

  try {
    //Check existing user
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(200).json({ message: "User already exists!" });
    }
    await newUser.save();
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    console.log(`/users/signin error ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Wrong Credentials" });
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
    //res.status(200).json({ message: "Signed in successfully" });
  } catch (error) {
    console.log(`/users/login error ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signOut = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    console.log(`/users/signout error ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
