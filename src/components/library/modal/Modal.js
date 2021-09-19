import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import idGeneration from '../../../utils/id_generation';
import { TEST_ID_MODAL } from '../../../tests/utils/test-ids';

import { Button, Text, Icon } from '..';
import { Portal } from '.';
import ModalStyled, { getModalClassName } from './Modal.styled';
import ModalContainerStyled from './ModalContainer.styled';
import ModalOverlayStyled from './ModalOverlay.styled';
import ModalContentStyled from './ModalContent.styled';
import useModalDisclosure from './hooks/useModalDisclosure';

export function Modal({
  testId = TEST_ID_MODAL,
  overlayId = idGeneration.generateId(),
  containerId = idGeneration.generateId(),
  children,
  title,
  shown = false,
  size = 'sm',
  hideOverlayOnClick = true,
  onHide,
}) {
  const overlayDefaultId = useMemo(() => overlayId, []);
  const containerDefaultId = useMemo(() => containerId, []);
  const { hasBeenShownOnce, handleHide } = useModalDisclosure({ shown, onHide });

  function handleOverlayClick(evt) {
    if ([overlayDefaultId, containerDefaultId].includes(evt.target.id) && hideOverlayOnClick) handleHide();
  }

  return (
    <Portal>
      <ModalOverlayStyled id={overlayDefaultId} className={getModalClassName(shown, hasBeenShownOnce)} onClick={handleOverlayClick}>
        <ModalContainerStyled id={containerDefaultId} onClick={handleOverlayClick}>
          <ModalStyled data-testid={testId} className={getModalClassName(shown, hasBeenShownOnce)} size={size}>
            <Button shape="circle" icon={<Icon name="close" />} onClick={handleHide} />
            <ModalContentStyled>
              <header>
                <Text size="lg" weight="bold">
                  {title}
                </Text>
              </header>
              <main>{children}</main>
            </ModalContentStyled>
          </ModalStyled>
        </ModalContainerStyled>
      </ModalOverlayStyled>
    </Portal>
  );
}
Modal.propTypes = {
  testId: PropTypes.string,
  title: PropTypes.string.isRequired,
  shown: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  hideOverlayOnClick: PropTypes.bool,
  onHide: PropTypes.func,
};
