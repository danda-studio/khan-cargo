const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", ".next", "bin", "obj", ".git", ".idea"]);
const EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css", ".cs"]);
const SKIP_FILE = new Set(["apply-copyright.cjs", "next-env.d.ts"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir))
    return out;
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name))
      continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory())
      walk(full, out);
    else if (EXT.has(path.extname(name).toLowerCase()) && !SKIP_FILE.has(name))
      out.push(full);
  }
  return out;
}

const files = [...new Set([
  ...walk(path.join(ROOT, "frontend", "src")),
  ...walk(path.join(ROOT, "frontend", "scripts")),
  ...walk(path.join(ROOT, "backend")),
  ...fs.readdirSync(path.join(ROOT, "frontend"))
    .map(n => path.join(ROOT, "frontend", n))
    .filter((f) => {
      try {
        return fs.statSync(f).isFile()
          && EXT.has(path.extname(f).toLowerCase())
          && !SKIP_FILE.has(path.basename(f));
      }
      catch {
        return false;
      }
    }),
])];

let changed = 0;
for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const useCrlf = /\r\n/.test(original);
  let text = original.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  const headerMatch = text.match(/^(\/\*\*[\s\S]*?Copyright © 2026 Khan Cargo\.[\s\S]*?\*\/\n\n?)/);
  const header = headerMatch ? headerMatch[1] : "";
  let body = header ? text.slice(header.length) : text;

  body = body
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "")
    .replace(/(^|\n)[ \t]*\/\/[^\n]*/g, "$1")
    .replace(/\/\*[\s\S]*?\*\//g, (block) => {
      if (block.includes("Copyright © 2026 Khan Cargo"))
        return block;
      return block.replace(/[^\n]/g, "");
    })
    .replace(/\n{3,}/g, "\n\n");

  const nextLf = `${header}${body}`;
  const next = useCrlf ? nextLf.replace(/\n/g, "\r\n") : nextLf;
  if (next !== original) {
    fs.writeFileSync(file, next, "utf8");
    changed++;
    console.log("cleaned", path.relative(ROOT, file));
  }
}

console.log(`cleaned ${changed} files`);
