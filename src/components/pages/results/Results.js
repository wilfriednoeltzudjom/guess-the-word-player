import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startGame, exitGame } from '../../../store/games/games.slice';
import { isNonEmptyObject } from '../../../utils/data_validation';
import dimensions from '../../../config/dimensions';
import { LABEL_BUTTON_BACK_TO_HOME, LABEL_BUTTON_RESTART } from '../../../utils/labels/results';
import gameHelper from '../../../utils/game.helper';

import { Container, Navbar } from '../../helpers/layout';
import { Word } from '../../helpers/core';
import useCountDown from '../../hooks/useCountDown';
import ResulsStyled from './Resuls.styled';
import { GameResult } from '../../helpers/core/game_result';
import { Button, VStack } from '../../library';
import SelectModeModal from '../common/modals/SelectModeModal';
import useDisclosure from '../../hooks/useDisclosure';

export default function Results() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { game } = useSelector((state) => state.gamesState);
  const { countDownRef } = useCountDown();
  const selectModeModal = useDisclosure();

  function handleSelectMode(mode) {
    dispatch(startGame({ data: { mode }, history }));
    selectModeModal.handleHide();
  }

  function handleBackHome() {
    dispatch(exitGame({ history }));
  }

  return isNonEmptyObject(game) && gameHelper.isEnded(game) ? (
    <>
      <Container navbar={<Navbar game={game} countDownRef={countDownRef} />}>
        <ResulsStyled>
          <GameResult game={game} />

          <Word game={game} />

          <VStack {...dimensions.buttons}>
            <Button onClick={selectModeModal.handleShow}>{LABEL_BUTTON_RESTART}</Button>
            <Button onClick={handleBackHome}>{LABEL_BUTTON_BACK_TO_HOME}</Button>
          </VStack>
        </ResulsStyled>
      </Container>

      <SelectModeModal shown={selectModeModal.shown} onSelectMode={handleSelectMode} onHide={selectModeModal.handleHide} />
    </>
  ) : (
    <></>
  );
}
