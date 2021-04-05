("use strict");

require("dotenv").config();
global.fetch = require("node-fetch");
const { signIn } = require("./sign-in");
module.exports.signIn = signIn;
