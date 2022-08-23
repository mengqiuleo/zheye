/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-23 01:23:23
 * @LastEditTime: 2022-08-23 19:20:35
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/base',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    // parser: '@babel/eslint-parser',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    requireConfigFile: false
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    endOfLine: 0
  }
}
