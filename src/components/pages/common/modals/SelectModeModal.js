import React from 'react';
import PropTypes from 'prop-types';

import { LABEL_MODAL_SELECT_MODE } from '../../../../utils/labels';
import { TEST_ID_MODAL_SELECT_MODE } from '../../../../tests/utils/test-ids';

import { Modal, VStack, Button } from '../../../library';
import { gameModes } from '../../../../utils/enums';
import gameHelper from '../../../../utils/game.helper';

export default function SelectModeModal({ shown, onSelectMode, onHide }) {
  return (
    <Modal testId={TEST_ID_MODAL_SELECT_MODE} title={LABEL_MODAL_SELECT_MODE} shown={shown} onHide={onHide}>
      <VStack>
        {Object.values(gameModes).map((mode) => (
          <Button key={mode} onClick={() => onSelectMode(mode)}>
            {gameHelper.translateMode({ mode })}
          </Button>
        ))}
      </VStack>
    </Modal>
  );
}
SelectModeModal.propTypes = {
  shown: PropTypes.bool,
  onSelectMode: PropTypes.func,
  onHide: PropTypes.func,
};
