module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'import/prefer-default-export': 'off',
    'max-len': { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }
  }
};
