import { httpClient, jsonContentTypeHeader } from '../../api';
import { API_ROUTE_WORDS } from '../../api/routes';

async function generateWord() {
  const { data } = await httpClient.post(
    API_ROUTE_WORDS,
    {},
    {
      headers: jsonContentTypeHeader,
    }
  );

  return data;
}

export default { generateWord };
