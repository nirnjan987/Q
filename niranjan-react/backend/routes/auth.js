const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../model/User");

const { registerValidation, loginValidation } = require("../validation");


router.post("/register", async (req, res) => {
 
  const { error } = registerValidation(req.body);


  if (error) return res.status(400).json({ error: error.details[0].message });

  const isEmailExist = await User.findOne({ email: req.body.email });


  if (isEmailExist)
    return res.status(400).json({ error: "Email already exists" });

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password,
  });

  try {
    const savedUser = await user.save();
    res.json({ error: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
});


router.post("/login", async (req, res) => {

  const { error } = loginValidation(req.body);

  
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });

 
  if (!user) return res.status(400).json({ error: "Email is wrong" });

 
  const validPassword = await bcrypt.compare(req.body.password, user.password);

    return res.status(400).json({ error: "Password is wrong" });


  const token = jwt.sign(
   
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});

module.exports = router;
