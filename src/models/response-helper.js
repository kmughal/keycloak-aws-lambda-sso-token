const ResponseHelpers = () => ({
  createSuccessResult: (message = "operation completed successfully") => ({
    statusCode: 200,
    body: typeof message === "string" ? message : JSON.stringify({ message }),
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Access-Control-Allow-Credentials": true,
    },
  }),
  createFailureResult: (e) => ({
    statusCode: 500,
    body: JSON.stringify({ message: e }),
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Access-Control-Allow-Credentials": true,
    },
  }),
});
exports.ResponseHelpers = ResponseHelpers();
