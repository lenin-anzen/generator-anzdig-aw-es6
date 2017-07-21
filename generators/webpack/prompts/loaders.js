module.exports = [
  {
    type: 'confirm',
    name: 'webpackLoadersConfirm',
    message: 'Would you like to use loaders?',
    default: true,
  },
  {
    when: function(response) {
      return response.webpackLoadersConfirm;
    },
    type: 'checkbox',
    name: 'webpackLoadersOptions',
    message: 'What loaders would you like to use with Webpack?',
    choices: [
      {
        name: 'RawLoader',
        value: 'raw-loader',
        checked: false,
      },
      {
        name: 'URLLoader',
        value: 'url-loader',
        checked: false,
      },
      {
        name: 'FileLoader',
        value: 'file-loader',
        checked: false,
      },
      {
        name: 'JSONLoader',
        value: 'json-loader',
        checked: false,
      },
      {
        name: 'StyleLoader',
        value: 'style-loader',
        checked: false,
      },
      {
        name: 'CSSLoader',
        value: 'css-loader',
        checked: false,
      },
    ],
  },
];
