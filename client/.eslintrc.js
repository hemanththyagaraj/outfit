module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    plugins: [
      'react',
      'react-hooks'
    ],
    rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
  };
  