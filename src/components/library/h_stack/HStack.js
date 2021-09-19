import React from 'react';
import PropTypes from 'prop-types';

import HStackStyled from './HStack.styled';

export function HStack({ children, size = 14, width, spacing = 1 }) {
  return (
    <HStackStyled size={size} spacing={spacing} width={width}>
      {children}
    </HStackStyled>
  );
}
HStack.propTypes = {
  size: PropTypes.number,
  width: PropTypes.string,
  spacing: PropTypes.number,
};
