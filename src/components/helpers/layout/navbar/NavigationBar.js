import React from 'react';
import PropTypes from 'prop-types';

import { LABEL_BUTTON_BACK } from '../../../../utils/labels';

import { Button, Icon } from '../../../library';
import NavbarStyled from './Navbar.styled';

export function NavigationBar({ onNavigateBack }) {
  function handleNavigateBack() {
    if (onNavigateBack) onNavigateBack();
  }

  return (
    <NavbarStyled>
      <Button variant="ghost" icon={<Icon name="arrow-back" />} onClick={handleNavigateBack}>
        {LABEL_BUTTON_BACK}
      </Button>
    </NavbarStyled>
  );
}
NavigationBar.propTypes = {
  onNavigateBack: PropTypes.func,
};
