const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  name: String,
  address: String,
  symbol: String,
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
