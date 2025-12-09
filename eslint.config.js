import globals from 'globals';
import pluginJs from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';

export default [
  {
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html,
      'js': pluginJs,
    },
    languageOptions: {
      parser: htmlParser,
      globals: globals.browser,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      '@html-eslint/no-inline-styles': 'off',
      '@html-eslint/require-closing-tags': 'off',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
      'no-extra-semi': 'warn',
      'no-unreachable': 'warn',
      'no-empty': 'warn',
      'no-useless-escape': 'warn',
      'no-constant-condition': 'warn',
      'no-dupe-keys': 'warn',
      'no-dupe-args': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-empty-pattern': 'warn',
      'no-case-declarations': 'warn',
      'no-fallthrough': 'warn',
      'no-prototype-builtins': 'warn',
    },
  }
];
