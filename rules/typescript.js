const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние 'Нет ошибки'. Для плавной интеграции
     */

  // desc: "Require that member overloads be consecutive"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
  "@typescript-eslint/adjacent-overload-signatures": OFF,

  // desc: "Requires using either T[] or Array<T> for arrays"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
  "@typescript-eslint/array-type": OFF,

  // desc: "Disallows awaiting a value that is not a Thenable"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
  "@typescript-eslint/await-thenable": OFF,

  // desc: "Bans “// @ts-ignore” comments from being used"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
  "@typescript-eslint/ban-ts-ignore": OFF,

  // desc: "Bans specific types from being used"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
  "@typescript-eslint/ban-types": OFF,

  // desc: "Enforce camelCase naming convention"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
  "@typescript-eslint/camelcase": OFF,

  // desc: "Require PascalCased class and interface names"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
  "@typescript-eslint/class-name-casing": OFF,

  // desc: "Enforces consistent usage of type assertions."
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
  "@typescript-eslint/consistent-type-assertions": OFF,

  // desc: "Consistent with type definition either interface or type"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  "@typescript-eslint/consistent-type-definitions": OFF,

  // desc: "Require explicit return types on functions and class methods"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
  "@typescript-eslint/explicit-function-return-type": OFF,

  // desc: "Require explicit accessibility modifiers on class properties and methods"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
  "@typescript-eslint/explicit-member-accessibility": OFF,

  // desc: "Require or disallow spacing between function identifiers and their invocations"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  "@typescript-eslint/func-call-spacing": OFF,

  // desc: "Enforces naming of generic type variables"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
  "@typescript-eslint/generic-type-naming": OFF,

  // desc: "Enforce consistent indentation"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  "@typescript-eslint/indent": OFF,

  // desc: "Require that interface names be prefixed with I"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
  "@typescript-eslint/interface-name-prefix": OFF,

  // desc: "Require a specific member delimiter style for interfaces and type literals"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  "@typescript-eslint/member-delimiter-style": OFF,

  // desc: "Enforces naming conventions for class members by visibility"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
  "@typescript-eslint/member-naming": OFF,

  // desc: "Require a consistent member declaration order"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
  "@typescript-eslint/member-ordering": OFF,

  // desc: "Disallow generic Array constructors"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  "@typescript-eslint/no-array-constructor": OFF,

  // desc: "Disallow empty functions"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  "@typescript-eslint/no-empty-function": OFF,

  // desc: "Disallow the declaration of empty interfaces"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
  "@typescript-eslint/no-empty-interface": OFF,

  // desc: "Disallow usage of the any type"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  "@typescript-eslint/no-explicit-any": OFF,

  // desc: "Disallow unnecessary parentheses"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  "@typescript-eslint/no-extra-parens": OFF,

  // desc: "Forbids the use of classes as namespaces"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
  "@typescript-eslint/no-extraneous-class": OFF,

  // desc: "Requires Promise-like values to be handled appropriately."
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  "@typescript-eslint/no-floating-promises": OFF,

  // desc: "Disallow iterating over an array with a for-in loop"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  "@typescript-eslint/no-for-in-array": OFF,

  // desc: "Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  "@typescript-eslint/no-inferrable-types": OFF,

  // desc: "Disallows magic numbers"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  "@typescript-eslint/no-magic-numbers": OFF,

  // desc: "Enforce valid definition of new and constructor"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
  "@typescript-eslint/no-misused-new": OFF,

  // desc: "Avoid using promises in places not designed to handle them"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  "@typescript-eslint/no-misused-promises": OFF,

  // desc: "Disallow the use of custom TypeScript modules and namespaces"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
  "@typescript-eslint/no-namespace": OFF,

  // desc: "Disallows non-null assertions using the ! postfix operator"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
  "@typescript-eslint/no-non-null-assertion": OFF,

  // desc: "Disallow the use of parameter properties in class constructors"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
  "@typescript-eslint/no-parameter-properties": OFF,

  // desc: "Disallows invocation of require()"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
  "@typescript-eslint/no-require-imports": OFF,

  // desc: "Disallow aliasing this"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
  "@typescript-eslint/no-this-alias": OFF,

  // desc: "Disallow the use of type aliases"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
  "@typescript-eslint/no-type-alias": OFF,

  // desc: "Warns when a namespace qualifier is unnecessary"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
  "@typescript-eslint/no-unnecessary-qualifier": OFF,

  // desc: "Warns if an explicitly specified type argument is the default for that type parameter"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
  "@typescript-eslint/no-unnecessary-type-arguments": OFF,

  // desc: "Warns if a type assertion does not change the type of an expression"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
  "@typescript-eslint/no-unnecessary-type-assertion": OFF,

  // desc: "Disallow unused variables"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  "@typescript-eslint/no-unused-vars": OFF,

  // desc: "Disallow the use of variables before they are defined"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  "@typescript-eslint/no-use-before-define": OFF,

  // desc: "Disallow unnecessary constructors"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  "@typescript-eslint/no-useless-constructor": OFF,

  // desc: "Disallows the use of require statements except in import statements"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
  "@typescript-eslint/no-var-requires": OFF,

  // desc: "Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
  "@typescript-eslint/prefer-for-of": OFF,

  // desc: "Use function types instead of interfaces with call signatures"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
  "@typescript-eslint/prefer-function-type": OFF,

  // desc: "Enforce includes method over indexOf method"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
  "@typescript-eslint/prefer-includes": OFF,

  // desc: "Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
  "@typescript-eslint/prefer-namespace-keyword": OFF,

  // desc: "Requires that private members are marked as readonly if they're never modified outside of the constructor"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
  "@typescript-eslint/prefer-readonly": OFF,

  // desc: "Prefer RegExp#exec() over String#match() if no global flag is provided"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  "@typescript-eslint/prefer-regexp-exec": OFF,

  // desc: "Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  "@typescript-eslint/prefer-string-starts-ends-with": OFF,

  // desc: "Requires any function or method that returns a Promise to be marked async"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  "@typescript-eslint/promise-function-async": OFF,

  // desc: "Enforce giving compare argument to Array#sort"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
  "@typescript-eslint/require-array-sort-compare": OFF,

  // desc: "Disallow async functions which have no await expression"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
  "@typescript-eslint/require-await": OFF,

  // desc: "When adding two variables, operands must both be of type number or of type string"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
  "@typescript-eslint/restrict-plus-operands": OFF,

  // desc: "Require or disallow semicolons instead of ASI"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  "@typescript-eslint/semi": OFF,

  // desc: "Restricts the types allowed in boolean expressions"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  "@typescript-eslint/strict-boolean-expressions": OFF,

  // desc: "Sets preference level for triple slash directives versus ES6-style import declarations"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
  "@typescript-eslint/triple-slash-reference": OFF,

  // desc: "Require consistent spacing around type annotations"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
  "@typescript-eslint/type-annotation-spacing": OFF,

  // desc: "Requires type annotations to exist"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
  "@typescript-eslint/typedef": OFF,

  // desc: "Enforces unbound methods are called with their expected scope"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
  "@typescript-eslint/unbound-method": OFF,

  // desc: "Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter"
  // url: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
  "@typescript-eslint/unified-signatures": OFF,
  }
}
