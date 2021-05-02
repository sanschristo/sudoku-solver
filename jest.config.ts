/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  testRegex: '.(test|spec){1}\\.ts?$',
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
};
