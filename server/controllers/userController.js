const User = require("../models/User");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  console.log("Signup Request Data: ", { email, password }); // Log incoming data

  try {
    // Create a new user in the database
    const newUser = await User.create({ email, password });
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
