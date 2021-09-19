import React from 'react';
import PropTypes from 'prop-types';

import { isNonEmptyObject } from '../../../utils/data_validation';
import { joinClassNames } from '../../../utils/styles.helper';

import IconStyled from './Icon.styled';

export function Icon({ className, style = {}, variant = 'filled', name, size = 'md' }) {
  return (
    <IconStyled className={joinClassNames(className, getIconClassName(variant))} style={style} size={size}>
      {getIconName(name, variant)}
    </IconStyled>
  );
}
Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['filled', 'outline']),
  name: PropTypes.oneOf(['add', 'arrow-back', 'close', 'heart', 'exit']).isRequired,
};

function getIconClassName(variant) {
  return { filled: 'material-icons', outline: 'material-icons-outlined' }[variant];
}

function getIconName(name, variant) {
  const iconName = { add: 'add', 'arrow-back': 'arrow_back_ios', close: 'close', heart: { filled: 'favorite', outline: 'favorite_border' }, exit: 'exit_to_app' }[name];

  return isNonEmptyObject(iconName) ? iconName[variant] : iconName;
}
