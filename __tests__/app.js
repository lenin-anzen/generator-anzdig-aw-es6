'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-anzdig-aw-es6:app', () => {
  // Generator class
  let generatorPath = path.join(__dirname, '../generators/app');
  // Default prompts
  let prompts = {

  };
  // Async timeout
  let originalTimeout;

  beforeEach(() => {
    originalTimeout = jest.DEFAULT_TIMEOUT_INTERVAL;
    jest.DEFAULT_TIMEOUT_INTERVAL = 100000; // 100 second timeout
  });

  beforeAll(() => {
    return helpers.run(generatorPath)
      .withPrompts(prompts)
      .withArguments(['noinstall']);
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      '.gitignore'
    ]);
  });

  afterEach(() => {
    jest.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
