#!/usr/bin/env node
const fs = require("fs");
const { flexing, execCmd } = require("./lib/utils");

let fileLocate = null;
const parseArgs = () => {
  const args = process.argv;

  if (args.length < 3) {
    console.log(
      "Require file args, ex: 'node mandailing-interpreter.js example/example1.mandailing' or 'mandailing example/example1.mandailing'"
    );
    return false;
  }

  fileLocate = args[2];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${args[2]}" not found, please verify file location`);
    return false;
  }

  return true;
};

if (!parseArgs()) {
  process.exit(1);
}

const inputMandailing = fs.readFileSync(fileLocate, "utf-8");

const result = flexing(inputMandailing);
execCmd(result);
