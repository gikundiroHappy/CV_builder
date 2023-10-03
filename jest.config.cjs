// jest.config.cjs
module.exports = {
  testEnvironment: "jest-environment-jsdom", // Update this line
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
