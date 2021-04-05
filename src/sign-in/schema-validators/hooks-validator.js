const { useHooks, logEvent, parseEvent, handleUnexpectedError } = require('lambda-hooks');
const { ResponseHelpers } = require('../../models/response-helper');

const withHooks = ({ bodySchema }) => {
    return useHooks(
        {
            before: [logEvent, parseEvent, validateEventBody],
            after: [],
            onError: [handleUnexpectedError],
        },
        { bodySchema }
    );
};

async function validateEventBody(state) {
    const { bodySchema } = state.config;
    if (!bodySchema) throw new Error('schema is required');

    const { event } = state;
    try {
        const inputData = event && event.body ? event.body : event;
        if (!inputData) throw new Error('null input');
        await bodySchema.validate(inputData, { strict: true });
    } catch (e) {
        const innerExceptions = e.errors ? e.errors.join(',') : e;
        state.response = ResponseHelpers.createFailureResult(innerExceptions);
        state.exit = true;
    }
    return state;
}

module.exports.withHooks = withHooks;