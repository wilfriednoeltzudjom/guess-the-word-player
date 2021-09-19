import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { startGame } from '../../../store/games/games.slice';
import { LABEL_APP_SUB_TITLE, LABEL_APP_TITLE, LABEL_BUTTON_NEW_GAME, LABEL_BUTTON_RULES } from '../../../utils/labels';
import dimensions from '../../../config/dimensions';
import { ROUTE_RULES } from '../../../routes';

import { VStack, Text, Button, Logo } from '../../library';
import { Container } from '../../helpers/layout';
import SelectModeModal from '../common/modals/SelectModeModal';
import useDisclosure from '../../hooks/useDisclosure';
import StartupStyled from './Startup.styled';

function Startup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectModeModal = useDisclosure();

  function handleSelectMode(mode) {
    dispatch(startGame({ data: { mode }, history }));
    selectModeModal.handleHide();
  }

  function handleNavigateToRulesPage() {
    history.push(ROUTE_RULES);
  }

  return (
    <>
      <Container>
        <StartupStyled>
          <Logo />
          <VStack spacing={5} justify="center">
            <VStack spacing={0.5}>
              <Text size="xxl" weight="bold">
                {LABEL_APP_TITLE}
              </Text>
              <Text>{LABEL_APP_SUB_TITLE}</Text>
            </VStack>

            <VStack {...dimensions.buttons}>
              <Button onClick={selectModeModal.handleShow}>{LABEL_BUTTON_NEW_GAME}</Button>
              <Button onClick={handleNavigateToRulesPage}>{LABEL_BUTTON_RULES}</Button>
            </VStack>
          </VStack>
        </StartupStyled>
      </Container>

      <SelectModeModal shown={selectModeModal.shown} onSelectMode={handleSelectMode} onHide={selectModeModal.handleHide}></SelectModeModal>
    </>
  );
}

export default Startup;
