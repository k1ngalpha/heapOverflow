import User from "../models/userModel";

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
    console.log(`/auth/sign-in error ${error}`);
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
    res.status(200).json({ message: "Signed in successfully" });
  } catch (error) {
    console.log(`auth/sign-in error ${error}`);
  }
};
