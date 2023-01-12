module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['react-native'],
  },
};
