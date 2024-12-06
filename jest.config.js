// jest.config.js
export default {
  moduleFileExtensions: ["js", "mjs", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).mjs"],
  transform: {
    "^.+\\.mjs$": "babel-jest", // Si usas Babel para transformar módulos
  },
  testEnvironment: "node", // Usar el entorno de prueba de Node.js
};
