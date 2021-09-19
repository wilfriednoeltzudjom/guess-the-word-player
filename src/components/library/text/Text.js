import React from 'react';
import PropTypes from 'prop-types';

import { colorSchemePropType } from '../../../utils/prop-types-schemas';

import TextStyled from './Text.styled';

export function Text({ className, style = {}, children, fluid = false, colorScheme = 'white', size = 'md', weight = 'regular' }) {
  return (
    <TextStyled className={className} style={style} fluid={fluid} colorScheme={colorScheme} size={size} weight={weight}>
      {children}
    </TextStyled>
  );
}
Text.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  colorScheme: colorSchemePropType,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'background']),
  weight: PropTypes.oneOf(['light', 'regular', 'medium', 'semi-bold', 'bold']),
};
