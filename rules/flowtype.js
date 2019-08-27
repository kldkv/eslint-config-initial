const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */
     
    // url: https://github.com/gajus/eslint-plugin-flowtype#semi
    'flowtype/semi': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
    'flowtype/no-weak-types': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#type-import-style
    'flowtype/type-import-style': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#array-style-complex-type
    'flowtype/array-style-complex-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#array-style-simple-type
    'flowtype/array-style-simple-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#boolean-style
    'flowtype/boolean-style': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
    'flowtype/delimiter-dangle': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
    'flowtype/generic-spacing': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
    'flowtype/object-type-delimiter': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
    'flowtype/no-dupe-keys': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
    'flowtype/require-valid-file-annotation': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
    'flowtype/space-after-type-colon': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
    'flowtype/space-before-generic-bracket': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
    'flowtype/space-before-type-colon': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
    'flowtype/union-intersection-spacing': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#newline-after-flow-annotation
    'flowtype/newline-after-flow-annotation': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-types-at-top
    'flowtype/require-types-at-top': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-inexact-type
    'flowtype/require-inexact-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
    'flowtype/define-flow-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-existential-type
    'flowtype/no-existential-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-flow-fix-me-comments
    'flowtype/no-flow-fix-me-comments': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-mutable-array
    'flowtype/no-mutable-array': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#no-unused-expressions
    'flowtype/no-unused-expressions': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-compound-type-alias
    'flowtype/require-compound-type-alias': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-exact-type
    'flowtype/require-exact-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
    'flowtype/require-parameter-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-return-type
    'flowtype/require-return-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-variable-type
    'flowtype/require-variable-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#sort-keys
    'flowtype/sort-keys': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#type-id-match
    'flowtype/type-id-match': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
    'flowtype/use-flow-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#spread-exact-type
    'flowtype/spread-exact-type': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-readonly-react-props
    'flowtype/require-readonly-react-props': OFF,

    // url: https://github.com/gajus/eslint-plugin-flowtype#require-indexer-name
    'flowtype/require-indexer-name': OFF,
  },
};
