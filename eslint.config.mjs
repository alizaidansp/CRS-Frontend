
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ["*.html"],
    extends: [
      "plugin:@angular-eslint/template/recommended",
      "plugin:@angular-eslint/template/accessibility",
    ],
    rules: {
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/no-any": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/use-track-by-function": "error",
      "@angular-eslint/template/prefer-ngsrc": "error",
      "@angular-eslint/template/button-has-type": "error",
      "@angular-eslint/template/no-useless-condition": "warn",
    },
  },

  {
    rules: {
      "no-console": ["warn", { allow: ["error"] }],
      "@/no-extra-semi": "error",
      "@typescript-eslint/no-useless-constructor": ["error"],
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",
      "brace-style": ["error", "1tbs"],

      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        },
      ],
      "lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: true,
        },
      ],
    },
  },
];