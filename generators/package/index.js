'use strict';

const Generator = require('yeoman-generator');

/**
 * Package Class
 * @class
 * @extends Generator
 * @requires yeoman-generator
 * @requires yosay
 * @requires chalk
 */
class PackageClass extends Generator {
  /**
     * Declare vars
     * @override
     * @requires ../package
     * @see {@link PackageClass}
     * @return {void}
     */
  initializing() {
    this.props = {};
  }
  /**
     * Prompt the initial greeting to the user.
     * @override
     * @return {void}
     */
  prompting() {
    const prompts = require('./prompts.json');

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  /**
     * Where you write the generator specific files (routes, controllers, etc)
     * @override
     * @return {void}
     */
  writing() {
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
