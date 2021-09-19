require('@babel/register')({ presets: [['@babel/preset-env', { targets: { node: '14.15.1' } }]] });
const fs = require('fs-extra');
const path = require('path');

const { wordFactory } = require('../../src/tests/factories');

module.exports = (on, config) => {
  on('task', {
    'make:word': (data = {}) => {
      return wordFactory.generateWord(data);
    },
  });

  return getConfigurationFile(config, config.env.configFile || 'development');
};

function getConfigurationFile(config, fileName) {
  const filePath = path.resolve('cypress', 'config', `${fileName}.json`);
  const { env, baseUrl } = fs.readJSONSync(filePath);
  if (env) config.env = env;
  if (baseUrl) config.baseUrl = baseUrl;

  return config;
}
