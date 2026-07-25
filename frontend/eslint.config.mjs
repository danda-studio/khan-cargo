import antfu from "@antfu/eslint-config";

export default antfu({
  react: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  ignores: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/shared/api/generated/**",
  ],
});
