exports.config = {
  runner: "local",
  framework: "mocha",
  reporters: ["spec"],
  specs: ["./specs/example.test.js"],

  logLevel: "warn",
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
    },
  ],
};
