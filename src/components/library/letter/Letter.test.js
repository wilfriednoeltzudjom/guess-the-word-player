import React from 'react';

import { render, screen } from '../../../tests/utils/rtl-helper';
import dataGeneration from '../../../utils/data_generation';
import { gameFactory, wordFactory } from '../../../tests/factories';
import { gameStatuses } from '../../../utils/enums';

import { Letter } from './Letter';

describe('component - library - <Letter />', () => {
  beforeEach(function () {
    this.props = {
      value: dataGeneration.generateAlpha(),
      game: {},
    };
  });

  describe('when the game is running', () => {
    beforeEach(function () {
      this.gameInitData = {
        status: gameStatuses.RUNNING,
      };
    });

    test('should not display the letter if it was not found', async function () {
      const { value } = this.props;
      const word = await wordFactory.generateWord({ initData: { value } });
      const game = await gameFactory.generateGame({ initData: { ...this.gameInitData, word, plays: [] } });
      render(<Letter {...this.props} game={game} />);

      expect(screen.queryByText(value)).not.toBeInTheDocument();
    });

    test('should display the letter if it was found', async function () {
      const { value } = this.props;
      const word = await wordFactory.generateWord({ initData: { value } });
      const game = await gameFactory.generateGame({ initData: { ...this.gameInitData, word, plays: [{ letter: value }] } });
      render(<Letter {...this.props} game={game} />);

      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  describe('when the user has won the game', () => {
    beforeEach(function () {
      this.gameInitData = {
        status: gameStatuses.WON,
      };
    });

    test('should display the letter if it was not found', async function () {
      const { value } = this.props;
      const word = await wordFactory.generateWord({ initData: { value } });
      const game = await gameFactory.generateGame({ initData: { ...this.gameInitData, word, plays: [] } });
      render(<Letter {...this.props} game={game} />);

      expect(screen.getByText(value)).toBeInTheDocument();
    });

    test('should display the letter if it was found', async function () {
      const { value } = this.props;
      const word = await wordFactory.generateWord({ initData: { value } });
      const game = await gameFactory.generateGame({ initData: { ...this.gameInitData, word, plays: [{ letter: value }] } });
      render(<Letter {...this.props} game={game} />);

      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  describe('when the user has lost the game', () => {
    beforeEach(function () {
      this.gameInitData = {
        status: gameStatuses.LOST,
      };
    });

    test('should display the letter if it was not found', async function () {
      const { value } = this.props;
      const word = await wordFactory.generateWord({ initData: { value } });
      const game = await gameFactory.generateGame({ initData: { ...this.gameInitData, word, plays: [] } });
      render(<Letter {...this.props} game={game} />);

      expect(screen.getByText(value)).toBeInTheDocument();
    });

    test('should display the letter if it was found', async function () {
      const { value } = this.props;
      const word = await wordFactory.generateWord({ initData: { value } });
      const game = await gameFactory.generateGame({ initData: { ...this.gameInitData, word, plays: [{ letter: value }] } });
      render(<Letter {...this.props} game={game} />);

      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
