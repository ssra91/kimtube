module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["unused-imports"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-console": "off",
    "react/button-has-type": "off",
    "@next/next/no-html-link-for-pages": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: [
          "function-declaration",
          "arrow-function",
          "function-expression",
        ],
      },
    ],
  },
};
