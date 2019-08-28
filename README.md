# eslint-initial
Turned off eslint rules for popular plugin for smooth integration.

## install

```code
npm i --save-dev eslint-config-initial
```

## configuration

- make `.eslintrc` in your root project dir
- [add needed for you eslint parameters](https://eslint.org/docs/user-guide/configuring)
- add your rules

## installed plugins / list of rules

- [base](https://eslint.org/docs/rules/)
- [react](https://github.com/yannickcr/eslint-plugin-react)
- [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [redux-saga](https://github.com/pke/eslint-plugin-redux-saga)
- [promise](https://github.com/xjamundx/eslint-plugin-promise)
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [import](https://github.com/benmosher/eslint-plugin-import)
- [import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)
- [jest](https://github.com/jest-community/eslint-plugin-jest)
- [jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [node](https://github.com/mysticatea/eslint-plugin-node)
- [security](https://github.com/nodesecurity/eslint-plugin-security)
- [sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)
- [flowtype](https://github.com/gajus/eslint-plugin-flowtype)

## example
`.eslintrc`
```json
{
  "parser": "babel-eslint",
  "extends": ["eslint-config-initial/rules/base", "./my-eslint-rules"]
}
```
```json
{
  "parser": "babel-eslint",
  "extends": ["eslint-config-initial/rules/base"],
  "rules": {
    "arrow-parens": "error"
  }
}
```
