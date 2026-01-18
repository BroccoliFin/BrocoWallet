const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const Token = require("../Model/tokenModel");
const Account = require("../Model/accountModel");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    address: req.body.address,
    private_key: req.body.private_key,
    mnemonic: req.body.mnemonic,
  });
  createSendToken(newUser, 201, req, res);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    res.status(400).json({
      status: "fail",
      message: "Please provide email and password!",
    });
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, req, res);
};

exports.allToken = async (req, res, next) => {
  const tokens = await Token.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    data: {
      tokens,
    },
  });
};

exports.addToekn = async (req, res, next) => {
  const createToken = await Token.create({
    name: req.body.name,
    address: req.body.address,
    symbol: req.body.symbol,
  });

  // SEND RESPONSE
  res.status(201).json({
    status: "success",
    data: {
      createToken,
    },
  });
};

exports.allAccount = async (req, res, next) => {
  const accounts = await Account.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    data: {
      accounts,
    },
  });
};

exports.createAccount = async (req, res, next) => {
  const account = await Account.create({
    privateKey: req.body.privateKey,
    address: req.body.address,
  });

  // SEND RESPONSE
  res.status(201).json({
    status: "success",
    data: {
      account,
    },
  });
};
