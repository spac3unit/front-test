module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}
