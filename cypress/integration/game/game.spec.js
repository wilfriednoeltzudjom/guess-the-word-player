import { gameModes } from '../../../src/utils/enums';
import gameHelper from '../../../src/utils/game.helper';

describe('pages - game', () => {
  beforeEach(function () {
    cy.visitStartupPage();
    cy.task('make:word')
      .as('word')
      .then((word) => {
        this.lettersToPlay = gameHelper.getLettersToPlay(word);
        cy.interceptGenerateWord({ body: { data: word } });
      });
  });

  context('easy mode', () => {
    beforeEach(function () {
      this.lettersToNotPlay = gameHelper.getLettersToNotPlay(this.word, gameModes.EASY);
      cy.assertNewGameButtonIsShown().click();

      cy.assertSelectModeModalIsShown().within(() => {
        cy.assertEasyModeButtonIsShown().click();
      });
      cy.assertGamePage();
      cy.assertGameModeIsShown({ mode: gameModes.EASY });
      cy.assertGameLivesAreShown({ lives: 7 });
      cy.assertWordDefinitionIsShown();
    });

    it('should exit a game session', function () {
      cy.assertWordDefinitionIsHidden({ timeout: 10000 });
      cy.assertExitButtonIsShown().click();
      cy.assertStartupPage();
    });

    it('should redirect to game page if trying to go to results page during a game session', function () {
      cy.visitResultsPage();

      cy.assertGamePage();
      cy.assertWordDefinitionIsNotShown();
    });

    it('should redirect to game page if trying to go to startup page during a game session', function () {
      cy.visitStartupPage();

      cy.assertGamePage();
      cy.assertWordDefinitionIsNotShown();
    });

    it('should win a game using keyboard to choose letters and restart the game afterward', function () {
      cy.wrap(this.lettersToPlay).each((letter) => {
        cy.pressKey({ key: letter });

        cy.assertLetterOccurencesAreShown(letter);
        cy.assertLetterIsDisabledInKeyboard(letter);
      });

      cy.assertResultsPage();
      cy.assertGameIsWon();

      cy.assertRestartButtonIsShown().click();
      cy.assertSelectModeModalIsShown().within(() => {
        cy.assertEasyModeButtonIsShown().click();
      });
      cy.assertGameModeIsShown({ mode: gameModes.EASY });
      cy.assertGameLivesAreShown({ lives: 7 });
    });

    it('should win a game using clicks to choose letters', function () {
      cy.wrap(this.lettersToPlay).each((letter) => {
        cy.assertButtonIsShown(letter).click();

        cy.assertLetterOccurencesAreShown(letter);
        cy.assertLetterIsDisabledInKeyboard(letter);
      });

      cy.assertResultsPage();
      cy.assertGameIsWon();
    });

    it('should lost a game because of too much lives lost and go back to home page', function () {
      cy.wrap(this.lettersToNotPlay).each((letter) => {
        cy.pressKey({ key: letter });
      });

      cy.assertResultsPage();
      cy.assertGameIsLost();

      cy.assertBackToHomeButtonIsShown().click();
      cy.assertStartupPage();
    });
  });

  context('medium mode', () => {
    beforeEach(function () {
      this.lettersToNotPlay = gameHelper.getLettersToNotPlay(this.word, gameModes.MEDIUM);
      cy.assertNewGameButtonIsShown().click();

      cy.assertSelectModeModalIsShown().within(() => {
        cy.assertMediumModeButtonIsShown().click();
      });
      cy.assertGamePage();
      cy.assertGameModeIsShown({ mode: gameModes.MEDIUM });
      cy.assertGameLivesAreShown({ lives: 5 });
    });

    it('should win a game using keyboard to choose letter', function () {
      cy.wrap(this.lettersToPlay).each((letter) => {
        cy.pressKey({ key: letter });

        cy.assertLetterOccurencesAreShown(letter);
        cy.assertLetterIsDisabledInKeyboard(letter);
      });

      cy.assertResultsPage();
    });

    it('should lost a game because of too much lives lost', function () {
      cy.wrap(this.lettersToNotPlay).each((letter) => {
        cy.pressKey({ key: letter });
      });

      cy.assertResultsPage();
    });
  });

  context('hard mode', () => {
    beforeEach(function () {
      this.lettersToNotPlay = gameHelper.getLettersToNotPlay(this.word, gameModes.HARD);
      cy.assertNewGameButtonIsShown().click();

      cy.assertSelectModeModalIsShown().within(() => {
        cy.assertHardModeButtonIsShown().click();
      });
      cy.assertGamePage();
      cy.assertGameModeIsShown({ mode: gameModes.HARD });
      cy.assertGameLivesAreShown({ lives: 3 });
    });

    it('should win a game using keyboard to choose letter', function () {
      cy.wrap(this.lettersToPlay).each((letter) => {
        cy.pressKey({ key: letter });

        cy.assertLetterOccurencesAreShown(letter);
        cy.assertLetterIsDisabledInKeyboard(letter);
      });

      cy.assertResultsPage();
    });

    it('should lost a game because of too much lives lost', function () {
      cy.wrap(this.lettersToNotPlay).each((letter) => {
        cy.pressKey({ key: letter });
      });

      cy.assertResultsPage();
      cy.assertRestartButtonIsShown().click();
      cy.assertSelectModeModalIsShown().within(() => {
        cy.assertEasyModeButtonIsShown().click();
      });
      cy.assertGameModeIsShown({ mode: gameModes.EASY });
      cy.assertGameLivesAreShown({ lives: 7 });
    });
  });
});
