import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { colorSchemePropType } from '../../../utils/prop-types-schemas';
import animationsHelper from '../../../utils/animations.helper';

import ButtonStyled from './Button.styled';

export function Button({ className, style = {}, children, fluid = false, colorScheme = 'primary', shape = 'rounded', variant = 'filled', size = 'md', disabled = false, icon, onClick }) {
  function handleClick(evt) {
    animationsHelper.createRipple(evt);
    if (onClick) onClick(evt);
  }

  return (
    <ButtonStyled className={className} style={style} fluid={fluid} colorScheme={colorScheme} shape={shape} variant={variant} size={size} disabled={disabled} icon={icon} onClick={handleClick}>
      <main>
        {isValidElement(icon) && cloneElement(icon, { className: 'icon', size: 'sm' })}
        {children}
      </main>
    </ButtonStyled>
  );
}
Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  fluid: PropTypes.bool,
  colorScheme: colorSchemePropType,
  shape: PropTypes.oneOf(['rounded', 'circle', 'square']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
  size: PropTypes.oneOf(['md', 'lg']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
