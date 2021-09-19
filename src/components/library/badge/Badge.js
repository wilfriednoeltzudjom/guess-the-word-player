import React from 'react';
import PropTypes from 'prop-types';

import BadgeStyled from './Badge.styled';

export function Badge({ className, style = {}, children }) {
  return (
    <BadgeStyled className={className} style={style}>
      {children}
    </BadgeStyled>
  );
}
Badge.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};
