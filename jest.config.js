import mongo from "@shelf/jest-mongodb/jest-preset.js";
import { recursive } from "merge";
import ts from "ts-jest";

export default recursive(ts, mongo, {
  testTimeout: 30000,
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  reporters: ["default", "github-actions"],
});
