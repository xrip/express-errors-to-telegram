module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'es6': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:promise/recommended',
		'plugin:sonarjs/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': 'tsconfig.json',
		'tsconfigRootDir': '.',
	},
	'plugins': ['promise', 'optimize-regex', 'sonarjs', '@typescript-eslint'],
	'rules': {
		// "no-shadow": ["error", {
		//     "builtinGlobals": true
		// }], // disallow variable declarations from shadowing variables declared in the outer scope
		'no-duplicate-imports': ['error', {
			'includeExports': true,
		}], // disallow duplicate module imports
		'no-template-curly-in-string': 'error', // disallow template literal placeholder syntax in regular strings
		'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
		'curly': ['error', 'all'], // enforce consistent brace style for all control statements
		'eqeqeq': 'error', // equire the use of === and !==
		'max-classes-per-file': ['error', 1], // enforce a maximum number of classes per file
		// "no-alert": "warn", // disallow the use of alert, confirm, and prompt
		"no-console": "error", // disallow the use of console
		'no-else-return': ['error', {
			'allowElseIf': false,
		}], // disallow else blocks after return statements in if statements
		'no-implicit-coercion': 'error', // disallow shorthand type conversions
		'no-labels': 'error', // disallow labeled statements
		'no-lone-blocks': 'error', // disallow unnecessary nested blocks
		'no-multi-spaces': 'error', // disallow multiple spaces
		'no-new': 'error', // disallow new operators outside of assignments or comparisons
		'no-new-func': 'error', // disallow new operators with the Function object
		'no-new-wrappers': 'error', // disallow new operators with the String, Number, and Boolean objects
		// Важный конфиг, чтобы не писали return await
		'no-return-await': 'error', // disallow unnecessary return await
		'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
		'no-sequences': 'error', // disallow comma operators
		'no-throw-literal': 'error', // disallow throwing literals as exceptions
		'no-unused-expressions': 'error', // disallow unused expressions
		'no-useless-call': 'error', // disallow unnecessary calls to .call() and .apply()
		'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
		'no-useless-return': 'error', // disallow redundant return statements
		'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
		'radix': 'error', // enforce the consistent use of the radix argument when using parseInt()
		'no-undefined': 'error', // disallow the use of undefined as an identifier
		'array-bracket-newline': ['error', {
			'multiline': true,
		}], // enforce linebreaks after opening and before closing array brackets
		'comma-dangle': ['error', 'always-multiline'], // require or disallow trailing commas
		'comma-style': 'error', // enforce consistent comma style
		'eol-last': 'error', // require or disallow newline at the end of files
		'key-spacing': 'error', // enforce consistent spacing between keys and values in object literal properties
		'keyword-spacing': 'error', // enforce consistent spacing before and after keywords
		'new-parens': 'error', // enforce or disallow parentheses when invoking a constructor with no arguments
		'no-bitwise': 'warn', // disallow bitwise operators
		'no-lonely-if': 'warn', // disallow if statements as the only statement in else blocks
		'no-multiple-empty-lines': 'error', // disallow multiple empty lines
		'no-nested-ternary': 'error', // disallow nested ternary expressions
		'no-new-object': 'error', // disallow Object constructors
		'no-tabs': ['error', {
			'allowIndentationTabs': true,
		}], // disallow all tabs
		'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines
		'no-unneeded-ternary': 'error', // disallow ternary operators when simpler alternatives exist
		'no-whitespace-before-property': 'error', // disallow whitespace before properties
		'object-curly-newline': ['error', {
			'multiline': true,
		}], // enforce consistent line breaks inside braces
		'object-curly-spacing': ['error', 'always'], // enforce consistent spacing inside braces
		'semi-spacing': 'error', // enforce consistent spacing before and after semicolons
		'space-before-blocks': 'error', // enforce consistent spacing before blocks
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always',
			},
		], // enforce consistent spacing before function definition opening parenthesis
		'space-in-parens': 'error', // enforce consistent spacing inside parentheses
		'space-infix-ops': 'error', // require spacing around infix operators
		'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators
		'spaced-comment': ['error', 'always'], // enforce consistent spacing after the // or /* in a comment
		'switch-colon-spacing': 'error', // enforce spacing around colons of switch statements
		'arrow-body-style': ['error', 'as-needed'], // require braces around arrow function bodies
		'arrow-parens': ['error', 'as-needed'], // require parentheses around arrow function arguments
		'arrow-spacing': 'error', // enforce consistent spacing before and after the arrow in arrow functions
		'generator-star-spacing': ['error', 'after'], // enforce consistent spacing around * operators in generator functions
		'no-confusing-arrow': 'error', // disallow arrow functions where they could be confused with comparisons
		'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals
		'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
		'object-shorthand': ['error', 'always'], // require or disallow method and property shorthand syntax for object literals
		'prefer-arrow-callback': 'warn', // require using arrow functions for callbacks
		'prefer-destructuring': 'error', // require destructuring from arrays and/or objects
		'rest-spread-spacing': ['error', 'never'], // enforce spacing between rest and spread operators and their expressions
		// "sort-imports": "warn", // enforce sorted import declarations within modules
		'template-curly-spacing': 'error', // require or disallow spacing around embedded expressions of template strings

		'promise/prefer-await-to-then': 'error', // refer await to then() for reading Promise values,
		// TODO: Waiting this rule to be fixed
		// "promise/prefer-await-to-callbacks": "error", // Prefer async/await to the callback pattern
		// https://github.com/xjamundx/eslint-plugin-promise/issues/175

		'optimize-regex/optimize-regex': 'warn', // Optimize regex literals

		'@typescript-eslint/no-extra-parens': ['error'], // Disallow unnecessary parentheses
		'@typescript-eslint/semi': ['error', 'always'], // Require or disallow semicolons instead of ASI
		'@typescript-eslint/member-delimiter-style': ['error', {
			'multiline': {
				'delimiter': 'none',
			},
		}], // Require a specific member delimiter style for interfaces and type literals
		'@typescript-eslint/member-ordering': 'warn', // Require a consistent member declaration order
        /*
		'@typescript-eslint/no-magic-numbers': [
			'warn',
			{
				'ignoreNumericLiteralTypes': true,
				'ignoreEnums': true,
				'enforceConst': true,
				'ignoreReadonlyClassProperties': true,
				'ignore': [-1, 0, 1, 2, 3, 24, 30, 60, 300, 600, 1000],
			},
		], // Disallows magic numbers
         */
		'@typescript-eslint/brace-style': ['error', '1tbs'], // Enforce consistent brace style for blocks
		'@typescript-eslint/indent': ['error', 4, {
			'SwitchCase': 1,
		}], // Enforce consistent indentation
		'@typescript-eslint/quotes': ['error', 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true,
		}], // Enforce the consistent use of either backticks, double, or single quotes
		'@typescript-eslint/func-call-spacing': ['error', 'never'], // Require or disallow spacing between function identifiers and their invocations
		'@typescript-eslint/no-useless-constructor': 'error', // Disallow unnecessary constructors
		'@typescript-eslint/prefer-for-of': 'warn', // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
		// "@typescript-eslint/no-parameter-properties": "error", // Disallow the use of parameter properties in class constructors
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn', // Warns if an explicitly specified type argument is the default for that type parameter
		'@typescript-eslint/prefer-function-type': 'warn', // Use function types instead of interfaces with call signatures
		'@typescript-eslint/prefer-readonly': 'warn', // Requires that private members are marked as readonly if they're never modified outside of the constructor
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': ['error', {
			'properties': 'never',
		}],
		'@typescript-eslint/explicit-function-return-type': ['error', {
			'allowExpressions': true,
		}],
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', {
			'argsIgnorePattern': '^_',
			'varsIgnorePattern': '^_$',
		}],
		'@typescript-eslint/no-inferrable-types': ['error', {
			ignoreParameters: true
		}],
        "@typescript-eslint/unbound-method": [
            "error",
            {
                "ignoreStatic": true
            }
        ],
		// TODO: waiting for this rule to be fixed for TS
		"no-invalid-this": "error", // disallow this keywords outside of classes or class-like objects
		// https://github.com/typescript-eslint/typescript-eslint/issues/491
		// https://github.com/typescript-eslint/typescript-eslint/issues/604
	},
};
