const { SignInRequest } = require("./models/SignInRequest");
const { createResponseMessage } = require("../common/helpers");
let service = require("./services/sign-in-service");

async function handler(event) {
  return await createResponseMessage(async () => {
    const inputData = event && event.body ? event.body : event;
    const result = await createResponseMessage(async () => {
      const _input = SignInRequest.create(inputData);
      const _result = await service.signInToKeyCloak(_input);
      if (_result.status !== 200) throw new Error("Something went wrong");
      return _result.data.access_token;
    });
    return result;
  });
}
module.exports.handler = handler;
