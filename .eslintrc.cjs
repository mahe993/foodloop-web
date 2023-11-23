module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', 'prefer-arrow-functions'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-alert': 'error',
        'no-debugger': 'error',
        'no-unused-vars': 'error',
        indent: ['error', 4],
        quotes: ['error', 'single'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        'no-unused-vars': 'off', // Disable the base rule as we are using the TypeScript version
        'react/jsx-uses-react': 'off', // Disable React rules to avoid conflicts with React 17
        'react/react-in-jsx-scope': 'off', // Disable React rules to avoid conflicts with React 17
        'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow console.warn and console.error
        'no-alert': 'error', // Disallow the use of alert, confirm, and prompt
        'no-debugger': 'error', // Disallow the use of debugger
        'react/prefer-stateless-function': 'error',
        'react/button-has-type': 'error',
        'react/no-unused-prop-types': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-no-script-url': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'react/jsx-fragments': 'error',
        'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
        'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
        'react/jsx-max-depth': ['error', { max: 5 }],
        'react/function-component-definition': ['error', { 'function-declaration': 'unnamedComponents' }],
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
                warnOnDuplicates: true,
            },
        ],
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/no-typos': 'warn',
        'react/display-name': 'warn',
        'react/self-closing-comp': 'warn',
        'react/jsx-sort-props': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        'arrow-body-style': 'warn',
        'prefer-arrow-callback': [
            'warn',
            {
                allowNamedFunctions: true,
            },
        ],
    },
};
