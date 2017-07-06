module.exports = [
 {
  type: 'confirm',
  name: 'webpackDevServerConfirm',
  message: 'Would you like to use Webpack-Dev-Server?',
  default: true
 },
 {
  when: function (response) {
    return response.webpackDevServerConfirm;
  },
  type: 'input',
  name: 'dev-server-compress',
  message: 'Compress',
  default: false
 },
 {
  when: function (response) {
    return response.webpackDevServerConfirm;
  },
  type: 'input',
  name: 'dev-server-host',
  message: 'Host',
  default: '0.0.0.0'
 },
 {
  when: function (response) {
    return response.webpackDevServerConfirm;
  },
  type: 'input',
  name: 'dev-server-port',
  message: 'Port',
  default: '3333'
 },
 {
  when: function (response) {
    return response.webpackDevServerConfirm;
  },
  type: 'list',
  name: 'dev-server-stats',
  message: 'What information should be displayed?',
  choices: [
    {
      name: 'errors-only',
      value: 'errors-only',
      message: 'errors-only: Only output when errors happen'
    },
    {
      name: 'minimal',
      value: 'minimal',
      message: 'minimal: Only output when errors or new compilation happen'
    },
    {
      name: 'none',
      value: 'none',
      message: 'none: Output nothing'
    },
    {
      name: 'normal',
      value: 'normal',
      message: 'normal: Standard output'
    },
    {
      name: 'detailed',
      value: 'detailed',
      message: 'detailed: Detailed output'
    },
    {
      name: 'verbose',
      value: 'verbose',
      message: 'verbose: Output everything'
    },
  ]
 }
];
