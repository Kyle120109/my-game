import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const TARGET_DIRS = ["src", "test", "scripts"];
const TARGET_FILES = ["vite.config.js"];
const JS_EXTENSIONS = new Set([".js", ".mjs", ".cjs"]);
const CONFLICT_MARKER_PATTERN = /^(<{7}|={7}|>{7})/m;

function collectFiles(dir, acc) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath, acc);
      continue;
    }
    if (JS_EXTENSIONS.has(extname(entry.name))) {
      acc.push(fullPath);
    }
  }
}

function checkSyntax(filePath) {
  const result = spawnSync(process.execPath, ["--check", filePath], { encoding: "utf8" });
  if (result.status !== 0) {
    process.stderr.write(result.stderr || result.stdout);
    return false;
  }
  return true;
}

function checkConflictMarkers(filePath) {
  const content = readFileSync(filePath, "utf8");
  return !CONFLICT_MARKER_PATTERN.test(content);
}

const files = [];
for (const dir of TARGET_DIRS) {
  if (existsSync(dir)) {
    collectFiles(dir, files);
  }
}
for (const file of TARGET_FILES) {
  if (existsSync(file)) {
    files.push(file);
  }
}

const uniqueFiles = [...new Set(files)].sort();
let hasFailure = false;

for (const file of uniqueFiles) {
  if (!checkConflictMarkers(file)) {
    console.error(`[lint] Merge conflict marker found: ${file}`);
    hasFailure = true;
    continue;
  }
  if (!checkSyntax(file)) {
    console.error(`[lint] Syntax check failed: ${file}`);
    hasFailure = true;
  }
}

if (hasFailure) {
  process.exit(1);
}

console.log(`[lint] OK (${uniqueFiles.length} files checked)`);
