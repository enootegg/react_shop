const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

//REGISTER
router.post(
  "/register",
  [
    check('email', 'Некорректний email').isEmail(),
    check('password', 'Мінімальна довжина паролю 8 символів').isLength({ min: 8 }),
    check('username', 'Мінімальна довжина імені користувача 3 символи').isLength({ min: 3 })
  ], 
  async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректні дані при реєстрації"
      })
    }

  const userName = await User.findOne({ username: req.body.username });
  if(userName) {return res.status(400).json("Користувача з таким іменем вже зареєстровано!")}

  const userEmail = await User.findOne({ email: req.body.email });
  if(userEmail) {return res.status(400).json("Користувача з такою поштою вже зареєстровано!")}

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {

  try {
    const user = await User.findOne({ username: req.body.username });
    
    if(!user) {return res.status(401).json("Такого користувача не існує!")}

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if(OriginalPassword !== req.body.password) {
      return res.status(401).json("Не вірний пароль!");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
