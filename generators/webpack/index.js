'use strict';

const Generator = require('yeoman-generator');

/**
 * Webpack Class
 * @class
 * @extends Generator
 * @requires yeoman-generator
 */
class WebpackClass extends Generator {
  /**
     * Install dependencies
     * @override
     * @return {void}
     */
  install() {
    this.npmInstall(
      ['webpack'],
      {'save-dev': true}
    );
  }
}
module.exports = WebpackClass;
