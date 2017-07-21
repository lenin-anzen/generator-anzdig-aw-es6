'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-anzdig-aw-es6:app', () => {
  // Generator class
  let generatorPath = path.join(__dirname, '../generators/app');
  // Default prompts
  let prompts = {
    webpackLoadersConfirm: false,
    webpackPluginsConfirm: false,
  };
  // Async timeout
  let originalTimeout;

  beforeEach(() => {
    originalTimeout = jest.DEFAULT_TIMEOUT_INTERVAL;
    jest.DEFAULT_TIMEOUT_INTERVAL = 30000; // 30 second timeout
  });

  beforeAll(() => {
    return helpers.run(generatorPath)
      .withPrompts(prompts)
      .withArguments(['skip-install']);
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      '.gitignore',
    ]);
  });

  afterEach(() => {
    jest.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
