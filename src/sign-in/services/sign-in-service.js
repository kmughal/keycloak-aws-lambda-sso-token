const axios = require("axios").default;
const qs = require("qs");
const config = require("../config");

const signInToKeyCloak = async ({ username, password }) => {
  const body = {
    username,
    password,
    grant_type: "password",
    client_id: config.resource,
    child_secret: config.credentials.secret,
  };
  const url = `${config["auth-server-url"]}/realms/${config.realm}/protocol/openid-connect/token`;

  const response = await axios({
    method: "post",
    url,
    data: qs.stringify(body),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  return { status: response.status, data: response.data };
};

module.exports.signInToKeyCloak = signInToKeyCloak;
