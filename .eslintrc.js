module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/no-default-export': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  // Component Logo (SVG) disable: no spreading.
};
