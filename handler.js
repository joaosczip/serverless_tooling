"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello from Docker and LocalStack",
      },
      null,
      2
    ),
  };
};
