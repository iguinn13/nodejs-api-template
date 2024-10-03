import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            semi: 'error',
            'eol-last': 'error',
            quotes: ['error', 'single'],
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    'selector': 'interface',
                    'format': ['PascalCase'],
                    'prefix': ['I'],
                },
            ],
            'no-fallthrough': 'off'
        }
    }
];
