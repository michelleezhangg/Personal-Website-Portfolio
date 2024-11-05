import globals, { node } from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
    plugins: ['pluginReact'],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
