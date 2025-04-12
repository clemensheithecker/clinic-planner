import { FlatCompat } from "@eslint/eslintrc";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:import/recommended",
    "prettier",
  ),
  {
    plugins: {
      "prefer-arrow-functions": preferArrowFunctions,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "prefer-arrow-functions/prefer-arrow-functions": [
        "warn",
        {
          allowedNames: [],
          allowNamedFunctions: false,
          allowObjectProperties: false,
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: "unchanged",
          singleReturnOnly: false,
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
];

export default eslintConfig;
