module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-alert": "error",
    "no-debugger": "error",
    "no-unused-vars": "error",
    indent: ["error", 2],
    quotes: ["error", "single"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "error",
    "no-unused-vars": "off", // Disable the base rule as we are using the TypeScript version
    "react/jsx-uses-react": "off", // Disable React rules to avoid conflicts with React 17
    "react/react-in-jsx-scope": "off", // Disable React rules to avoid conflicts with React 17
    "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn and console.error
    "no-alert": "error", // Disallow the use of alert, confirm, and prompt
    "no-debugger": "error", // Disallow the use of debugger
  },
};
