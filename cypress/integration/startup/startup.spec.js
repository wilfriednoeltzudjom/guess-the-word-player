describe('pages - startup', () => {
  beforeEach(function () {
    cy.visitStartupPage();
  });

  it('should display game description', function () {
    cy.assertAppTitleIsShown();
    cy.assertAppSubTitleIsShown();
  });

  it('should start a new game', function () {
    cy.assertNewGameButtonIsShown().click();

    cy.assertSelectModeModalIsShown().within(() => {
      cy.assertEasyModeButtonIsShown();
      cy.assertMediumModeButtonIsShown();
      cy.assertHardModeButtonIsShown();
    });
  });

  it('should open rules page and come back to startup page', function () {
    cy.assertRulesButtonIsShown().click();
    cy.assertRulesPage();

    cy.assertBackButtonIsShown().click();
    cy.assertStartupPage();
  });
});
