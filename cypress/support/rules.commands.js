const { LABEL_BUTTON_BACK } = require('../../src/utils/labels');

/** UI */
Cypress.Commands.add('assertRulesPage', () => {
  cy.location('pathname').should('eql', '/rules');
});

Cypress.Commands.add('assertBackButtonIsShown', () => {
  return cy.assertButtonIsShown(LABEL_BUTTON_BACK);
});
