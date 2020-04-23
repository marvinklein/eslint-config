module.exports = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    // Possible Errors
    'for-direction': 'error', // enforce “for” loop update clause moving the counter in the right direction
    'getter-return': 'error', // enforce return statements in getters
    'no-async-promise-executor': 'error', // disallow using an async function as a Promise executor
    'no-await-in-loop': 'error', // disallow await inside of loops
    'no-compare-neg-zero': 'error', // disallow comparing against -0
    'no-cond-assign': 'error', // disallow assignment operators in conditional expressions
    'no-console': 'warn', // disallow the use of 'console'
    'no-constant-condition': 'error', // disallow constant expressions in conditions
    'no-control-regex': 'error', // disallow control characters in regular expressions
    'no-debugger': 'warn', // disallow the use of 'debugger'
    'no-dupe-args': 'error', // disallow duplicate arguments in 'function' definitions
    'no-dupe-keys': 'error', // disallow duplicate keys in object literals
    'no-duplicate-case': 'error', // disallow duplicate case labels
    'no-empty': 'error', // disallow empty block statements
    'no-empty-character-class': 'error', // disallow empty character classes in regular expressions
    'no-ex-assign': 'error', // disallow reassigning exceptions in 'catch' clauses
    'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
    'no-extra-parens': [ 'error', { 'nestedBinaryExpressions': false } ], // disallow unnecessary parentheses
    'no-extra-semi': 'error', // disallow unnecessary semicolons. (fixable)
    'no-func-assign': 'error', // disallow reassigning 'function' declarations
    'no-inner-declarations': 'error', // disallow 'function' or 'var' declarations in nested blocks
    'no-invalid-regexp': 'error', // disallow invalid regular expression strings in 'RegExp' constructors
    'no-irregular-whitespace': 'error', // disallow irregular whitespace outside of strings and comments
    'no-misleading-character-class': 'error', // disallow characters which are made with multiple code points in character class syntax
    'no-obj-calls': 'error', // disallow calling global object properties as functions
    'no-prototype-builtins': 'off', // disallow calling some Object.prototype methods directly on objects
    'no-regex-spaces': 'error', // disallow multiple spaces in regular expression literals
    'no-sparse-arrays': 'error', // disallow sparse arrays
    'no-template-curly-in-string': 'off', // disallow template literal placeholder syntax in regular strings
    'no-unexpected-multiline': 'error', // disallow confusing multiline expressions
    'no-unreachable': 'error', // disallow unreachable code after 'return', 'throw', 'continue', and 'break' statements
    'no-unsafe-finally': 'error', // disallow control flow statements in 'finally' blocks
    'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
    'require-atomic-updates': 'error', // disallow assignments that can lead to race conditions due to usage of await or yield
    'use-isnan': 'error', // require calls to 'isNaN()' when checking for 'NaN'
    'valid-typeof': 'error', // enforce comparing 'typeof' expressions against valid strings

    // Best Practices
    'accessor-pairs': 'error', // enforce getter and setter pairs in objects
    'array-callback-return': 'error', // enforce 'return' statements in callbacks of array methods
    'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
    'complexity': 'off', // enforce a maximum cyclomatic complexity allowed in a program
    'consistent-return': 'error', // require 'return' statements to either always or never specify values
    'curly': [ 'error', 'multi-line', 'consistent' ], // enforce consistent brace style for all control statements
    'default-case': 'error', // require 'default' cases in 'switch' statements
    'dot-location': [ 'error', 'property' ], // enforce consistent newlines before and after dots
    'dot-notation': 'error', // enforce dot notation whenever possible
    'eqeqeq': 'error', // require the use of '===' and '!=='
    'guard-for-in': 'error', // require 'for-in' loops to include an 'if' statement
    'max-classes-per-file': 'off', // enforce a maximum number of classes per file
    'no-alert': 'warn', // disallow the use of 'alert', 'confirm', and 'prompt'
    'no-caller': 'error', // disallow the use of 'arguments.caller' or 'arguments.callee'
    'no-case-declarations': 'error', // disallow lexical declarations in case clauses
    'no-div-regex': 'off', // disallow division operators explicitly at the beginning of regular expressions
    'no-else-return': 'error', // disallow 'else' blocks after 'return' statements in 'if' statements
    'no-empty-function': 'error', // disallow empty functions
    'no-empty-pattern': 'error', // disallow empty destructuring patterns
    'no-eq-null': 'error', // disallow 'null' comparisons without type-checking operators
    'no-eval': 'error', // disallow the use of 'eval()'
    'no-extend-native': 'error', // disallow extending native types
    'no-extra-bind': 'error', // disallow unnecessary calls to '.bind()'
    'no-extra-label': 'off', // disallow unnecessary labels
    'no-fallthrough': 'error', // disallow fallthrough of 'case' statements
    'no-floating-decimal': 'error', // disallow leading or trailing decimal points in numeric literals
    'no-global-assign': 'error', // disallow assignments to native objects or read-only global variables
    'no-implicit-coercion': 'off', // disallow shorthand type conversions
    'no-implicit-globals': 'error', // disallow 'var' and named 'function' declarations in the global scope
    'no-implied-eval': 'error', // disallow the use of 'eval()'-like methods
    'no-invalid-this': 'error', // disallow 'this' keywords outside of classes or class-like objects
    'no-iterator': 'error', // disallow the use of the '__iterator__' property
    'no-labels': 'error', // disallow labeled statements
    'no-lone-blocks': 'error', // disallow unnecessary nested blocks
    'no-loop-func': 'error', // disallow 'function' declarations and expressions inside loop statements
    'no-magic-numbers': [ 'error', { ignore: [ -1, 0, 1 ] } ], // disallow magic numbers
    'no-multi-spaces': 'error', // disallow multiple spaces (fixable)
    'no-multi-str': 'off', // disallow multiline strings
    'no-new': 'off', // disallow 'new' operators outside of assignments or comparisons
    'no-new-func': 'error', // disallow 'new' operators with the 'Function' object
    'no-new-wrappers': 'error', // disallow 'new' operators with the 'String', 'Number', and 'Boolean' objects
    'no-octal': 'error', // disallow octal literals
    'no-octal-escape': 'error', // disallow octal escape sequences in string literals
    'no-param-reassign': 'error', // disallow reassigning 'function' parameters
    'no-proto': 'error', // disallow the use of the '__proto__' property
    'no-redeclare': 'error', // disallow 'var' redeclaration
    'no-return-assign': 'error', // disallow assignment operators in 'return' statements
    'no-return-await': 'error', // disallow unnecessary return await
    'no-script-url': 'error', // disallow 'javascript:' urls
    'no-self-assign': 'error', // disallow assignments where both sides are exactly the same
    'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
    'no-sequences': 'error', // disallow comma operators
    'no-throw-literal': 'error', // disallow throwing literals as exceptions
    'no-unmodified-loop-condition': 'error', // disallow unmodified loop conditions
    'no-unused-expressions': 'error', // disallow unused expressions
    'no-unused-labels': 'error', // disallow unused labels
    'no-useless-call': 'error', // disallow unnecessary calls to '.call()' and '.apply()'
    'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
    'no-useless-escape': 'error', // disallow unnecessary escape characters
    'no-useless-return': 'error', // disallow redundant return statements
    'no-void': 'error', // disallow 'void' operators
    'no-warning-comments': [ 'warn', { terms: [ 'todo' ], location: 'start' } ], // disallow specified warning terms in comments
    'no-with': 'error', // disallow 'with' statements
    'prefer-named-capture-group': 'off', // enforce using named capture group in regular expression
    'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
    'radix': 'off', // enforce the consistent use of the radix argument when using 'parseInt()'
    'require-await': 'error', // disallow async functions which have no await expression
    'require-unicode-regexp': 'off', // enforce the use of u flag on RegExp
    'vars-on-top': 'error', // require 'var' declarations be placed at the top of their containing scope
    'wrap-iife': [ 'error', 'inside' ], // require parentheses around immediate 'function' invocations
    'yoda': 'error', // require or disallow "Yoda" conditions

    // Strict Mode
    'strict': 'off', // require or disallow strict mode directives

    // Variables
    'init-declarations': 'off', // require or disallow initialization in 'var' declarations
    'no-delete-var': 'error', // disallow deleting variables
    'no-label-var': 'error', // disallow labels that share a name with a variable
    'no-restricted-globals': 'error', // disallow specified global variables
    'no-shadow': 'error', // disallow 'var' declarations from shadowing variables in the outer scope
    'no-shadow-restricted-names': 'error', // disallow identifiers from shadowing restricted names
    'no-undef': 'error', // disallow the use of undeclared variables unless mentioned in '/*global */' comments
    'no-undef-init': 'off', // disallow initializing variables to 'undefined'
    'no-undefined': 'off', // disallow the use of 'undefined' as an identifier
    'no-unused-vars': [ 'error', { args: 'none' } ], // disallow unused variables
    'no-use-before-define': 'error', // disallow the use of variables before they are defined

    // Node.js and CommonJS
    'callback-return': 'error', // require 'return' statements after callbacks
    'global-require': 'error', // require 'require()' calls to be placed at top-level module scope
    'handle-callback-err': 'error', // require error handling in callbacks
    'no-buffer-constructor': 'error', // disallow use of the Buffer() constructor
    'no-mixed-requires': 'off', // disallow 'require' calls to be mixed with regular 'var' declarations
    'no-new-require': 'off', // disallow 'new' operators with calls to 'require'
    'no-path-concat': 'error', // disallow string concatenation with '__dirname' and '__filename'
    'no-process-env': 'off', // disallow the use of 'process.env'
    'no-process-exit': 'off', // disallow the use of 'process.exit()'
    'no-restricted-modules': 'off', // disallow specified modules when loaded by 'require'
    'no-sync': 'off', // disallow synchronous methods

    // Stylistic Issues
    'array-bracket-newline': [ 'error', 'consistent' ], // enforce linebreaks after opening and before closing array brackets
    'array-bracket-spacing': [ 'error', 'always' ], // enforce consistent spacing inside array brackets
    'array-element-newline': [ 'error', 'consistent' ], // enforce line breaks after each array element
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
    'camelcase': [ 'error', { properties: 'always' } ],
    'capitalized-comments': 'off', // enforce or disallow capitalization of the first letter of a comment
    'comma-dangle': 'error', // require or disallow trailing commas
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ], // enforce consistent comma style
    'computed-property-spacing': 'error', // enforce consistent spacing inside computed property brackets (fixable)
    'consistent-this': [ 'error', '_this' ],
    'eol-last': 'off', // enforce at least one newline at the end of files (fixable)
    'func-call-spacing': 'error', // require or disallow spacing between function identifiers and their invocations
    'func-name-matching': 'off', // require function names to match the name of the variable or property to which they are assigned
    'func-names': 'error', // require or disallow named 'function' expressions
    'func-style': [ 'error', 'declaration', { 'allowArrowFunctions': true } ], // enforce the consistent use of either 'function' declarations or expressions
    'function-call-argument-newline': 'off', // enforce line breaks between arguments of a function call
    'function-paren-newline': 'off', // enforce consistent line breaks inside function parentheses
    'id-blacklist': 'off', // disallow specified identifiers
    'id-length': 'off', // enforce minimum and maximum identifier lengths
    'id-match': 'off', // require identifiers to match a specified regular expression
    'implicit-arrow-linebreak': 'error', // enforce the location of arrow function bodies
    'indent': [ 'error', 2, { SwitchCase: 1 } ], // enforce consistent indentation (fixable)
    'jsx-quotes': [ 'error', 'prefer-single' ], // enforce the consistent use of either double or single quotes in JSX attributes (fixable)
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' } ], // enforce consistent spacing between keys and values in object literal properties (fixable)
    'keyword-spacing': [ 'error', { before: true, after: true } ], // enforce consistent spacing before and after keywords (fixable)
    'line-comment-position': 'off', // enforce position of line comments
    'linebreak-style': [ 'error', 'unix' ], // enforce consistent linebreak style (fixable)
    'lines-around-comment': 'off', // require empty lines around comments
    'lines-between-class-members': 'error', // require empty lines around comments
    'max-depth': 'off', // enforce a maximum depth that blocks can be nested
    'max-len': 'off', // enforce a maximum line length
    'max-lines': 'off', // enforce a maximum file length
    'max-lines-per-function': 'off', // enforce a maximum number of line of code in a function
    'max-nested-callbacks': 'off', // enforce a maximum depth that callbacks can be nested
    'max-params': 'off', // enforce a maximum number of parameters in 'function' definitions
    'max-statements': 'off', // enforce a maximum number of statements allowed in 'function' blocks
    'max-statements-per-line': 'off', // enforce a maximum number of statements allowed per line
    'multiline-comment-style': 'off', // enforce a particular style for multiline comments
    'multiline-ternary': 'off', // enforce newlines between operands of ternary expressions
    'new-cap': [ 'error', { capIsNewExceptions: [ 'ObjectId' ] } ], // require constructor 'function' names to begin with a capital letter
    'new-parens': 'error', // require parentheses when invoking a constructor with no arguments
    'newline-per-chained-call': 'error', // require a newline after each call in a method chain
    'no-array-constructor': 'off', // disallow 'Array' constructors
    'no-bitwise': 'off', // disallow bitwise operators
    'no-continue': 'error', // disallow 'continue' statements
    'no-inline-comments': 'off', // disallow inline comments after code
    'no-lonely-if': 'error', // disallow 'if' statements as the only statement in 'else' blocks
    'no-mixed-operators': 'error', // disallow mixes of different operators
    'no-mixed-spaces-and-tabs': 'error', // disallow mixed spaces and tabs for indentation
    'no-multi-assign': 'off', // disallow use of chained assignment expressions
    'no-multiple-empty-lines': 'error', // disallow multiple empty lines (fixable)
    'no-negated-condition': 'off', // disallow negated conditions
    'no-nested-ternary': 'off', // disallow nested ternary expressions
    'no-new-object': 'off', // disallow 'Object' constructors
    'no-plusplus': 'off', // disallow the unary operators '++' and '--'
    'no-restricted-syntax': 'off', // disallow specified syntax
    'no-tabs': 'off', // disallow all tabs
    'no-ternary': 'off', // disallow ternary operators
    'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines (fixable)
    'no-underscore-dangle': [ 'error', { 'allow': [ '_id' ] } ], // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 'error', // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 'error', // disallow whitespace before properties (fixable)
    'nonblock-statement-body-position': 'error', // enforce the location of single-line statements
    'object-curly-newline': 'off', // enforce consistent line breaks inside braces (fixable)
    'object-curly-spacing': [ 'error', 'always' ], // enforce consistent spacing inside braces (fixable)
    'object-property-newline': 'off', // enforce placing object properties on separate lines
    'one-var': 'off', // enforce variables to be declared either together or separately in functions
    'one-var-declaration-per-line': 'off', // require or disallow newlines around 'var' declarations
    'operator-assignment': 'off', // require or disallow assignment operator shorthand where possible
    'operator-linebreak': 'off', // enforce consistent linebreak style for operators
    'padded-blocks': [ 'error', 'never' ], // require or disallow padding within blocks (fixable)
    'padding-line-between-statements': 'off', // require or disallow padding lines between statements
    'prefer-object-spread': 'error', // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'quote-props': [ 'error', 'consistent' ], // require quotes around object literal property names
    'quotes': [ 'error', 'single' ], // enforce the consistent use of either backticks, double, or single quotes (fixable)
    'semi': 'error', // require or disallow semicolons instead of ASI (fixable)
    'semi-spacing': 'error', // enforce consistent spacing before and after semicolons (fixable)
    'semi-style': 'error', // enforce location of semicolons
    'sort-keys': 'off', // require object keys to be sorted
    'sort-vars': 'off', // require variables within the same declaration block to be sorted
    'space-before-blocks': 'error', // enforce consistent spacing before blocks (fixable)
    'space-before-function-paren': [ 'error', { anonymous: 'never', named: 'never', asyncArrow: 'always' } ], // enforce consistent spacing before 'function' definition opening parenthesis (fixable)
    'space-in-parens': 'error', // enforce consistent spacing inside parentheses (fixable)
    'space-infix-ops': 'error', // require spacing around operators (fixable)
    'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators (fixable)
    'spaced-comment': 'error', // enforce consistent spacing after the '//' or '/*' in a comment (fixable)
    'switch-colon-spacing': 'error', // enforce spacing around colons of switch statements
    'template-tag-spacing': 'error', // require or disallow spacing between template tags and their literals
    'unicode-bom': 'off', // require or disallow the Unicode BOM (fixable)
    'wrap-regex': 'off', // require parenthesis around regex literals

    // ECMAScript 6
    'arrow-body-style': 'off', // require braces around arrow function bodies
    'arrow-parens': 'off', // require parentheses around arrow function arguments (fixable)
    'arrow-spacing': 'error', // enforce consistent spacing before and after the arrow in arrow functions (fixable)
    'constructor-super': 'error', // require 'super()' calls in constructors
    'generator-star-spacing': 'error', // enforce consistent spacing around '*' operators in generator functions (fixable)
    'no-class-assign': 'error', // disallow reassigning class members
    'no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
    'no-const-assign': 'error', // disallow reassigning 'const' variables
    'no-dupe-class-members': 'error', // disallow duplicate class members
    'no-duplicate-imports': 'off', // disallow duplicate module imports
    'no-new-symbol': 'error', // disallow 'new' operators with the 'Symbol' object
    'no-restricted-imports': 'off', // disallow specified modules when loaded by 'import'
    'no-this-before-super': 'error', // disallow 'this'/'super' before calling 'super()' in constructors
    'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals
    'no-useless-constructor': 'error', // disallow unnecessary constructors
    'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name (fixable)
    'no-var': 'off', // require 'let' or 'const' instead of 'var' (fixable)
    'object-shorthand': 'off', // require or disallow method and property shorthand syntax for object literals (fixable)
    'prefer-arrow-callback': 'off', // require arrow functions as callbacks
    'prefer-const': 'off', // require 'const' declarations for variables that are never reassigned after declared (fixable)
    'prefer-destructuring': 'off', // require destructuring from arrays and/or objects
    'prefer-numeric-literals': 'off', // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-rest-params': 'off', // require rest parameters instead of 'arguments'
    'prefer-spread': 'off', // require spread operators instead of '.apply()'
    'prefer-template': 'off', // require template literals instead of string concatenation
    'require-yield': 'error', // require generator functions to contain 'yield'
    'rest-spread-spacing': 'error', // enforce spacing between rest and spread operators and their expressions (fixable)
    'sort-imports': 'off', // enforce sorted import declarations within modules
    'symbol-description': 'off', // require symbol descriptions
    'template-curly-spacing': 'error', // require or disallow spacing around embedded expressions of template strings (fixable)
    'yield-star-spacing': 'error' // require or disallow spacing around the '*' in 'yield*' expressions (fixable)
  }
};
