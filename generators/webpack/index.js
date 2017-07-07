'use strict';

const Generator = require('yeoman-generator');
const _ = require('lodash');

/**
 * Webpack Class
 * @class
 * @extends Generator
 * @requires yeoman-generator
 */
class WebpackClass extends Generator {
  /**
   * Declare vars
   * @override
   * @return {void}
   */
  initializing() {
    this.props = {};
  }

  /**
   * Require all the related prompts.
   * @override
   * @return {void}
   */
  prompting() {
    let prompts = [];
    prompts = prompts.concat(require('./prompts/loaders'));
    prompts = prompts.concat(require('./prompts/plugins'));
    prompts = prompts.concat(require('./prompts/dev-server'));
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  /**
   * Install dependencies
   * @override
   * @return {void}
   */
  install() {
    // Const currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    let packages = ['webpack'];
    if (this.props.webpackLoadersConfirm && _.size(this.props.webpackLoadersOptions) > 0) {
      _.each(this.props.webpackLoadersOptions, option => {
        switch (option) {
          case 'extract-text-webpack-plugin':
          case 'html-webpack-plugin':
            packages.push(option);
            break;
          default:
        }
      });
    }
    if (this.props.webpackPluginsConfirm && _.size(this.props.webpackPluginsOptions) > 0) {
      _.each(this.props.webpackPluginsOptions, option => {
        packages.push(option);
      });
    }
    if (this.props.webpackDevServerConfirm) {
      packages.push('webpack-dev-server');
    }
    if (this.options['skip-install'] !== true) {
      this.npmInstall(
        packages,
        {
          'save-dev': true
        }
      );
    }
  }
}
module.exports = WebpackClass;
