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
   * @override
   * @requires ../package
   * @see {@link PackageClass}
   * @requires ../webpack
   * @see {@link WebpackClass}
   * @return {void}
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
      'Welcome to the awesome ' + chalk.red('anzdig-aw-es6') + ' generator!'
    ));
  }

  /**
   * Saving configurations and configure the project (creating .editorconfig files and other metadata files)
   * @override
   * @return {void}
   */
  configuring() {
  }

  /**
   * Where you write the generator specific files (routes, controllers, etc)
   * @override
   * @return {void}
   */
  writing() {
  }

  /**
   * 
   */
  install() {
    if (this.options['skip-install'] !== true) {
      this.installDependencies({
        bower: false
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
