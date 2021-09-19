const { LABEL_BUTTON_RESTART, LABEL_BUTTON_BACK_TO_HOME } = require('../../src/utils/labels/results');

/** UI */
Cypress.Commands.add('visitResultsPage', () => {
  cy.visit('/results');
});

Cypress.Commands.add('assertResultsPage', () => {
  cy.location('pathname').should('eql', '/results');
});

Cypress.Commands.add('assertRestartButtonIsShown', () => {
  return cy.assertButtonIsShown(LABEL_BUTTON_RESTART);
});

Cypress.Commands.add('assertBackToHomeButtonIsShown', () => {
  return cy.assertButtonIsShown(LABEL_BUTTON_BACK_TO_HOME);
});
