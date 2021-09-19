import React from 'react';
import PropTypes from 'prop-types';

import LinkStyled from './Link.styled';
import { colorSchemePropType } from '../../../utils/prop-types-schemas';

export function Link({ className, style = {}, children, colorScheme = 'white', selected = false, onClick }) {
  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <LinkStyled className={className} style={style} colorScheme={colorScheme} selected={selected} onClick={handleClick}>
      {children}
    </LinkStyled>
  );
}
Link.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  colorScheme: colorSchemePropType,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
