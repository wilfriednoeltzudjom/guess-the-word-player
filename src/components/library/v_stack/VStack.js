import React from 'react';
import PropTypes from 'prop-types';

import VStackStyled from './VStack.styled';

export function VStack({ children, size, spacing = 1, ...restProps }) {
  return (
    <VStackStyled size={size} spacing={spacing} {...restProps}>
      {children}
    </VStackStyled>
  );
}
VStack.propTypes = {
  size: PropTypes.number,
  spacing: PropTypes.number,
  justify: PropTypes.oneOf(['center']),
};
