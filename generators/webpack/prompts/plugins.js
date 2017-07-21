module.exports = [{
  type: 'confirm',
  name: 'webpackPluginsConfirm',
  message: 'Would you like to use plugins?',
  default: true,
},
{
  when: function(response) {
    return response.webpackPluginsConfirm;
  },
  type: 'checkbox',
  name: 'webpackPluginsOptions',
  message: 'What plugins would you like to use with Webpack?',
  choices: [
    {
      name: 'CommonsChunkPlugin',
      value: 'common-chunks-webpack-plugin',
      checked: false,
    },
    {
      name: 'ExtractTextWebpackPlugin',
      value: 'extract-text-webpack-plugin',
      checked: false,
    },
    {
      name: 'HtmlWebpackPlugin',
      value: 'html-webpack-plugin',
      checked: false,
    },
    {
      name: 'HotModuleReplacementPlugin',
      value: 'hot-module-replacement-webpack-plugin',
      checked: false,
    },
    {
      name: 'CopyWebpackPlugin',
      value: 'copy-webpack-plugin',
      checked: false,
    },
    {
      name: 'IgnorePlugin',
      value: 'ignore-webpack-plugin',
      checked: false,
    },
  ],
}];
