import { gameModesTransalations } from '../../src/utils/enums';
import { TEST_ID_MODAL_SELECT_MODE } from '../../src/tests/utils/test-ids';
import { LABEL_APP_TITLE, LABEL_APP_SUB_TITLE } from '../../src/utils/labels';

/** Common */
Cypress.Commands.add('assertAppTitleIsShown', () => {
  return cy.findByText(LABEL_APP_TITLE).should('exist');
});

Cypress.Commands.add('assertAppSubTitleIsShown', () => {
  return cy.findByText(LABEL_APP_SUB_TITLE).should('exist');
});

Cypress.Commands.add('pressKey', (evt = {}) => {
  cy.get('body').trigger('keydown', evt);
});

/** Buttons */
Cypress.Commands.add('assertButtonIsShown', (label) => {
  return cy.findByRole('button', { name: new RegExp(`.*${label}$`) }).should('exist');
});

Cypress.Commands.add('assertEasyModeButtonIsShown', () => {
  return cy.assertButtonIsShown(gameModesTransalations.EASY.EN);
});

Cypress.Commands.add('assertMediumModeButtonIsShown', () => {
  return cy.assertButtonIsShown(gameModesTransalations.MEDIUM.EN);
});

Cypress.Commands.add('assertHardModeButtonIsShown', () => {
  return cy.assertButtonIsShown(gameModesTransalations.HARD.EN);
});

Cypress.Commands.add('clickButtonEasyMode', () => {
  return cy.assertEasyModeButtonIsShown().click();
});

Cypress.Commands.add('clickButtonMediumMode', () => {
  return cy.assertMediumModeButtonIsShown().click();
});

Cypress.Commands.add('clickButtonHardMode', () => {
  return cy.assertHardModeButtonIsShown().click();
});

/** Modals */
Cypress.Commands.add('assertModalIsShown', (testId) => {
  return cy.findByTestId(testId).should('exist');
});

Cypress.Commands.add('assertSelectModeModalIsShown', () => {
  return cy.assertModalIsShown(TEST_ID_MODAL_SELECT_MODE);
});
