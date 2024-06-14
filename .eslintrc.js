module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', 'import', 'unused-imports'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'react/prop-types': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],

        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type'
                ],
                'pathGroups': [
                    {
                        pattern: '@/**',
                        group: 'internal'
                    }
                ],
                'newlines-between': 'always'
            }
        ]
    }
}
