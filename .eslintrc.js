/* eslint-disable no-undef */
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12, //latest version of ES
		tsconfigRootDir: __dirname,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	ignorePatterns: ['/lib/**', 'rollup.config.js'],
	rules: {
		'react/no-unescaped-entities': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'no-constant-condition': 'off',
		quotes: 'off',
		'@typescript-eslint/quotes': [
			0,
			'single',
			{
				avoidEscape: true,
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		indent: 'off',
		'prettier/prettier': [
			'error',
			{
				semi: true,
				trailingComma: 'all',
				endOfLine: 'auto',
				printWidth: 100,
				tabWidth: 4,
				useTabs: true,
				bracketSpacing: true,
				singleQuote: true,
				jsxSingleQuote: true,
			},
		],
	},
};
