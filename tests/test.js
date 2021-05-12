import { strict as assert } from "node:assert";
import path from "node:path";
import helperCjs from "./helper.cjs";
import esmMigrationUtils from "../index.js";

function run(name, test) {
  console.log(`Run     : ${name}`);
  try {
    test();
    console.log(`Success : ${name}`);
  } catch (error) {
    console.log(`Failure : ${name}: ${error}`);
  }
}

const { __dirname, __filename, require } = esmMigrationUtils(import.meta);

run("__dirname is the same as cjs", () => {
  assert.equal(__dirname, helperCjs.__dirname);
});

run("__filename is the same as cjs", () => {
  assert.equal(path.dirname(__filename), path.dirname(helperCjs.__filename));
  assert.equal(__filename, path.join(__dirname, "test.js"));
});

run("require is the same as cjs", () => {
  const m1 = require("./module.cjs");
  const m2 = helperCjs.require("./module.cjs");
  assert.deepEqual(m1, m2);
});
