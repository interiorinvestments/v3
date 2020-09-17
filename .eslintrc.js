module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'simple-import-sort',
  ],
  rules: {
    'no-trailing-spaces': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 1,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/sort': [
      2, {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^[^.]'],
          ['^\\.'],
        ],
      },
    ],
  },
};
