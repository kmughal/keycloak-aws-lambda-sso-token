class SignInRequest {
  constructor({ username, password }) {
    this.username = username;
    this.password = password;
  }
}

SignInRequest.create = (input) => {
  try {
    if (!input) throw new Error("input is null / empty");
    const instance = new SignInRequest(input);
    return instance;
  } catch (e) {
    throw e;
  }
};

exports.SignInRequest = SignInRequest;
