'use strict';

const Generator = require('yeoman-generator');

/**
 * Package Class: Generate initial config files.
 * @class
 * @extends Generator
 * @requires yeoman-generator
 */
class PackageClass extends Generator {
  /**
   * Declare vars
   * @override
   * @return {void}
   */
  initializing() {
    this.props = {};
  }
  /**
     * Prompts the info data of the project.
     * @override
     * @return {void}
     */
  prompting() {
    const prompts = require('./prompts.json');
    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  /**
   * Saving configurations and configure the project: package.json, .gitignore
   * @override
   * @return {void}
   */
  configuring() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
  }
}
module.exports = PackageClass;
