'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

/**
 * App Class
 * @class
 * @extends Generator
 * @requires yeoman-generator
 * @requires yosay
 * @requires chalk
 */
class AppClass extends Generator {
  /**
   * Arguments and options should be defined in the constructor.
   * @param {object} args Arguments
   * @param {object} opts Options
   * @override
   * @constructor
   * @return {void}
   */
  constructor(args, opts) {
    super(args, opts);

    // Get an argument from the cli --skip-install
    this.option('skip-install');
  }

  /**
   * Include the subgenerators.
   * @requires module:../package
   * @see {@link PackageClass}
   * @requires module:../webpack
   * @see {@link WebpackClass}
   * @override
   */
  initializing() {
    this.composeWith(require.resolve('../package'));
    this.composeWith(require.resolve('../webpack'));
  }

  /**
   * Prompt the initial greeting to the user.
   * @override
   * @return {void}
   */
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('anzdig-aw-es6') + ' generator!'
    ));
  }

  /**
   * Install dependencies
   * @override
   * @return {void}
   */
  install() {
    if (this.options['skip-install'] !== true) {
      this.installDependencies({
        bower: false,
      });
    }
  }

  /**
   * Called last, cleanup, say good bye, etc.
   * @override
   * @return {void}
   */
  end() {
    this.log(yosay(`That’s it.`));
  }
}
module.exports = AppClass;
