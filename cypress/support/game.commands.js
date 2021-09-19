import { API_ROUTE_WORDS } from '../../src/api/routes';
import { TEST_ID_KEYBOARD, TEST_ID_WORD, TEST_ID_WORD_DEFINITON } from '../../src/tests/utils/test-ids';
import gameHelper from '../../src/utils/game.helper';
import { LABEL_BUTTON_EXIT, LABEL_GAME_LOST, LABEL_GAME_WON, LABEL_LIVES_LEFT } from '../../src/utils/labels';
import { getRouteUrl } from '../utils/api';

/** UI */
Cypress.Commands.add('assertGamePage', () => {
  cy.location('pathname').should('eql', '/game');
});

Cypress.Commands.add('assertGameModeIsShown', ({ mode }) => {
  return cy.findByText(gameHelper.translateMode({ mode })).should('exist');
});

Cypress.Commands.add('assertExitButtonIsShown', () => {
  return cy.assertButtonIsShown(LABEL_BUTTON_EXIT);
});

Cypress.Commands.add('assertGameLivesAreShown', ({ lives }) => {
  cy.findByText(LABEL_LIVES_LEFT, { exact: false })
    .should('exist')
    .parent('div')
    .within(() => {
      cy.findByText(lives).should('exist');
    });
});

Cypress.Commands.add('assertLetterOccurencesAreShown', (letter) => {
  cy.findByTestId(TEST_ID_WORD)
    .should('exist')
    .within(() => {
      cy.findAllByText(letter).should('have.length.gt', 0);
    });
});

Cypress.Commands.add('assertLetterIsDisabledInKeyboard', (letter) => {
  cy.findByTestId(TEST_ID_KEYBOARD)
    .should('exist')
    .within(() => {
      cy.assertButtonIsShown(letter).should('be.disabled');
    });
});

Cypress.Commands.add('assertGameIsWon', () => {
  cy.findByText(LABEL_GAME_WON, { exact: false }).should('exist');
});

Cypress.Commands.add('assertGameIsLost', () => {
  cy.findByText(LABEL_GAME_LOST, { exact: false }).should('exist');
});

Cypress.Commands.add('assertWordDefinitionIsShown', () => {
  return cy.findByTestId(TEST_ID_WORD_DEFINITON).should('exist');
});

Cypress.Commands.add('assertWordDefinitionIsNotShown', () => {
  cy.findByTestId(TEST_ID_WORD_DEFINITON).should('not.exist');
});

Cypress.Commands.add('assertWordDefinitionIsHidden', ({ timeout = 4000 } = {}) => {
  cy.findByTestId(TEST_ID_WORD_DEFINITON, { timeout }).should('have.class', 'hidden');
});

/** Interceptors */
Cypress.Commands.add('interceptGenerateWord', ({ statusCode = 200, body = {} } = {}) => {
  const routeUrl = getRouteUrl({ route: API_ROUTE_WORDS });

  cy.intercept('POST', routeUrl, { statusCode, body }).as('GenerateWord');
  cy.waitFor('@GenerateWord');
});
