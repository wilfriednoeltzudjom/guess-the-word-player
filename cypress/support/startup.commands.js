import { LABEL_BUTTON_NEW_GAME, LABEL_BUTTON_RULES } from '../../src/utils/labels';

/** UI */
Cypress.Commands.add('visitStartupPage', () => {
  cy.visit('/startup');
});

Cypress.Commands.add('assertStartupPage', () => {
  cy.location('pathname').should('eql', '/startup');
});

Cypress.Commands.add('assertNewGameButtonIsShown', () => {
  return cy.assertButtonIsShown(LABEL_BUTTON_NEW_GAME);
});

Cypress.Commands.add('assertRulesButtonIsShown', () => {
  return cy.assertButtonIsShown(LABEL_BUTTON_RULES);
});
