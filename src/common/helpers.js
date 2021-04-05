const { ResponseHelpers } = require('../models/response-helper');

const createResponseMessage = async (cb) => {
    try {
        const result = await cb();
        return ResponseHelpers.createSuccessResult(result);
    } catch (e) {
        return ResponseHelpers.createFailureResult(e);
    }
};

exports.createResponseMessage = createResponseMessage;
