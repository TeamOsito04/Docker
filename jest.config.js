// jest.config.js
export default {
  moduleFileExtensions: ["js", "mjs", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).mjs"],
  transform: {
    "^.+\\.mjs$": "babel-jest",
  },
  testEnvironment: "node",
};
