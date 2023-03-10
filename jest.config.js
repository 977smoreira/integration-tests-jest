import { defaults } from "jest-config";
import { recursive } from "merge";
import ts from "ts-jest";

export default recursive(ts, {
  testTimeout: 30000,
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  roots: ["<rootDir>/src"],
});
