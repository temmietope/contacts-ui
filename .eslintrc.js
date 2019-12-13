module.exports = {
    root: true,
    env: {
      browser: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
      "no-console": "off"
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  };