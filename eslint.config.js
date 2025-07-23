import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import * as pluginImportX from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import * as reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { configs, parser } from 'typescript-eslint';

export default defineConfig([
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js, 'unused-imports': unusedImports, perfectionist },
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },

  configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  jsxA11y.flatConfigs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      parser: parser,
      sourceType: 'module',
    },

    rules: {
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'perfectionist/sort-jsx-props': ['error'],
    },

    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }),
      ],
      react: {
        version: 'detect',
      },
    },
  },

  globalIgnores(['build', 'coverage', 'node_modules', 'public', '.react-router']),
]);
