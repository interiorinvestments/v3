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
  settings: {
    'import/resolver': {
      node: {
        paths: 'src',
      },
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    'import/prefer-default-export': 1,
    'no-trailing-spaces': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    'react/forbid-prop-types': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
  },
};
