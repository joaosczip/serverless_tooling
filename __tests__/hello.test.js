"use strict";

const mod = require("../handler");

const jestPlugin = require("serverless-jest-plugin");
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: "hello" });

describe("hello", () => {
  beforeAll((done) => {
    done();
  });

  it("implement tests here", () => {
    return wrapped.run({}).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
