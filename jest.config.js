import mongo from "@shelf/jest-mongodb/jest-preset.js";
import { defaults } from "jest-config";
import { recursive } from "merge";
import ts from "ts-jest";

export default recursive(ts, mongo, {
  testTimeout: 30000,
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  roots: ["<rootDir>/src"],
});
