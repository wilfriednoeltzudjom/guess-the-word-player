import { isValidValue } from './data_validation';

export function isCypressTesting() {
  return isValidValue(window.Cypress);
}

export function getTestsEnvVariables() {
  const config = {
    development: {
      TEST_API_BASE_URL: 'http://localhost:5000/v1',
    },
  };

  return config[process.env.NODE_ENV] || {};
}
