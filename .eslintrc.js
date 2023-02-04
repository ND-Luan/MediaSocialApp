module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-unused-vars': 'off',
    'react-native/no-inline-styles': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      "warn",
      {
        "singleQuote": true,
        "tabWidth": 4
      },

      'error',
      {

        endOfLine: 'auto',
        'no-inline-styles': false,
      },
    ],
  },
};
