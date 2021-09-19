import axios from 'axios';
import { isCypressTesting, getTestsEnvVariables } from '../utils/tests.helper';

const { TEST_API_BASE_URL } = getTestsEnvVariables();

const httpClient = axios.create({
  baseURL: isCypressTesting() ? TEST_API_BASE_URL : process.env.REACT_APP_API_BASE_URL,
});

const jsonContentTypeHeader = { 'Content-Type': 'application/json' };

export { httpClient, jsonContentTypeHeader };
