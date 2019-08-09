const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    'jest/lowercase-name': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-empty-title.md
    'jest/no-empty-title': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    'jest/no-jest-import': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-callback.md
    'jest/no-test-callback': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
    'jest/no-truthy-falsy': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    'jest/prefer-inline-snapshots': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    'jest/prefer-todo': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-tothrow-message.md
    'jest/require-tothrow-message': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    'jest/valid-describe': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'consistent-test-it': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'no-commented-out-tests': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'no-duplicate-hooks': OFF,

    // url: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
    'no-expect-resolves': OFF,
  },
};
