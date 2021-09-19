export function getRouteUrl({ route }) {
  const baseUrl = Cypress.env('TEST_API_BASE_URL');

  return baseUrl.concat(route);
}
