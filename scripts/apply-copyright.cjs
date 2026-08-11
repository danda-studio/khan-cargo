const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ts = require(path.join(ROOT, "frontend", "node_modules", "typescript"));

const HEADER_LINES = [
  "/**",
  " * Copyright © 2026 Khan Cargo.",
  " * All rights reserved.",
  " *",
  " * Developed by Danda Team.",
  " */",
];

const SKIP_DIR = new Set([
  "node_modules",
  ".next",
  "bin",
  "obj",
  ".git",
  "dist",
  "coverage",
  ".turbo",
  ".idea",
]);

const SKIP_FILE = new Set([
  "apply-copyright.cjs",
  "next-env.d.ts",
]);

const CODE_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css", ".cs"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir))
    return out;
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIR.has(name))
      continue;
    const full = path.join(dir, name);
    let st;
    try {
      st = fs.statSync(full);
    }
    catch {
      continue;
    }
    if (st.isDirectory())
      walk(full, out);
    else if (CODE_EXT.has(path.extname(name).toLowerCase()) && !SKIP_FILE.has(name))
      out.push(full);
  }
  return out;
}

function toLf(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function stripTsLikeComments(sourceText, fileName) {
  const isJsx = /\.(tsx|jsx)$/i.test(fileName);
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    false,
    isJsx ? ts.LanguageVariant.JSX : ts.LanguageVariant.Standard,
    sourceText,
  );

  let result = "";
  while (true) {
    const kind = scanner.scan();
    if (kind === ts.SyntaxKind.EndOfFileToken)
      break;

    if (
      kind === ts.SyntaxKind.SingleLineCommentTrivia
      || kind === ts.SyntaxKind.MultiLineCommentTrivia
    ) {
      if (kind === ts.SyntaxKind.MultiLineCommentTrivia) {
        const text = scanner.getTokenText();
        result += text.replace(/[^\n]/g, "");
      }
      continue;
    }

    result += scanner.getTokenText();
  }

  return result;
}

function stripCssComments(source) {
  let out = "";
  let i = 0;
  let inStr = null;
  while (i < source.length) {
    const c = source[i];
    const n = source[i + 1];
    if (inStr) {
      out += c;
      if (c === "\\" && i + 1 < source.length) {
        out += source[i + 1];
        i += 2;
        continue;
      }
      if (c === inStr)
        inStr = null;
      i++;
      continue;
    }
    if (c === "\"" || c === "'") {
      inStr = c;
      out += c;
      i++;
      continue;
    }
    if (c === "/" && n === "*") {
      i += 2;
      while (i < source.length && !(source[i] === "*" && source[i + 1] === "/")) {
        if (source[i] === "\n")
          out += "\n";
        i++;
      }
      i += 2;
      continue;
    }
    out += c;
    i++;
  }
  return out;
}

function stripCsComments(source) {
  let out = "";
  let i = 0;
  let inStr = null;
  let verbatim = false;

  while (i < source.length) {
    const c = source[i];
    const n = source[i + 1];

    if (inStr) {
      out += c;
      if (verbatim) {
        if (c === "\"" && n === "\"") {
          out += n;
          i += 2;
          continue;
        }
        if (c === "\"") {
          inStr = null;
          verbatim = false;
        }
        i++;
        continue;
      }
      if (c === "\\" && i + 1 < source.length) {
        out += source[i + 1];
        i += 2;
        continue;
      }
      if (c === inStr)
        inStr = null;
      i++;
      continue;
    }

    if (c === "@" && n === "\"") {
      out += "@\"";
      inStr = "\"";
      verbatim = true;
      i += 2;
      continue;
    }
    if (c === "$" && n === "@" && source[i + 2] === "\"") {
      out += "$@\"";
      inStr = "\"";
      verbatim = true;
      i += 3;
      continue;
    }
    if (c === "$" && n === "\"") {
      out += "$\"";
      inStr = "\"";
      i += 2;
      continue;
    }
    if (c === "\"" || c === "'") {
      inStr = c;
      out += c;
      i++;
      continue;
    }

    if (c === "/" && n === "/") {
      i += 2;
      while (i < source.length && source[i] !== "\n")
        i++;
      continue;
    }
    if (c === "/" && n === "*") {
      i += 2;
      while (i < source.length && !(source[i] === "*" && source[i + 1] === "/")) {
        if (source[i] === "\n")
          out += "\n";
        i++;
      }
      i += 2;
      continue;
    }

    out += c;
    i++;
  }
  return out;
}

function stripExistingHeader(source) {
  return source.replace(/^(\s*\/\*\*[\s\S]*?Copyright © 2026 Khan Cargo\.[\s\S]*?\*\/\s*)+/i, "");
}

function normalizeBlankLines(source) {
  return source.replace(/\n{3,}/g, "\n\n").replace(/[ \t]+\n/g, "\n").replace(/^\s+/, "");
}

function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const original = fs.readFileSync(file, "utf8");
  const useCrlf = /\r\n/.test(original);
  const nl = useCrlf ? "\r\n" : "\n";

  let shebang = "";
  let body = toLf(original.replace(/^\uFEFF/, ""));
  if (body.startsWith("#!")) {
    const end = body.indexOf("\n");
    shebang = end === -1 ? `${body}\n` : body.slice(0, end + 1);
    body = end === -1 ? "" : body.slice(end + 1);
  }

  body = stripExistingHeader(body);

  if (ext === ".css")
    body = stripCssComments(body);
  else if (ext === ".cs")
    body = stripCsComments(body);
  else
    body = stripTsLikeComments(body, path.basename(file));

  body = normalizeBlankLines(toLf(body));

  const header = HEADER_LINES.join("\n");
  const nextLf = `${shebang}${header}\n\n${body}${body.endsWith("\n") ? "" : "\n"}`;
  const next = useCrlf ? nextLf.replace(/\n/g, "\r\n") : nextLf;

  if (next === original)
    return false;

  fs.writeFileSync(file, next, "utf8");
  return true;
}

const files = [...new Set([
  ...walk(path.join(ROOT, "frontend", "src")),
  ...walk(path.join(ROOT, "frontend", "scripts")),
  ...fs.readdirSync(path.join(ROOT, "frontend"))
    .map(n => path.join(ROOT, "frontend", n))
    .filter((f) => {
      try {
        const name = path.basename(f);
        return fs.statSync(f).isFile()
          && CODE_EXT.has(path.extname(f).toLowerCase())
          && !SKIP_FILE.has(name);
      }
      catch {
        return false;
      }
    }),
  ...walk(path.join(ROOT, "backend")),
])];

let changed = 0;
let failed = 0;
for (const file of files) {
  try {
    if (processFile(file)) {
      changed++;
      console.log("updated", path.relative(ROOT, file));
    }
    else {
      console.log("ok     ", path.relative(ROOT, file));
    }
  }
  catch (err) {
    failed++;
    console.error("FAIL   ", path.relative(ROOT, file), err && err.message ? err.message : err);
  }
}

console.log(`\nDone. Changed ${changed}/${files.length}. Failed ${failed}.`);
