module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  ignorePatterns: ["**/src-tauri/*"],
  rules: {
    "vue/multi-word-component-names": "off",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "max-len": ["warn", {
      code: 79,
      tabWidth: 2,
    }]
  },
};
