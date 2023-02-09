/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.less$": "less-loader"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: `react`
      }
    }
  }
};
