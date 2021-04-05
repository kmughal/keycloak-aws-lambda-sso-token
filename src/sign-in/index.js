const { bodySchema } = require('./schema-validators/body-schema-validator');
const { withHooks } = require('./schema-validators/hooks-validator');
const { handler } = require('./handler');

module.exports.signIn = withHooks({ bodySchema })(handler);
