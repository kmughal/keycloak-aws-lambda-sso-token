const yup = require("yup");
const bodySchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

module.exports.bodySchema = bodySchema;
