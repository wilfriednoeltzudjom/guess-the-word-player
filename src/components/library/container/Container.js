import React from 'react';
import PropTypes from 'prop-types';

import ContainerStyled from './Container.styled';

export function Container({ className, style = {}, children }) {
  return (
    <ContainerStyled className={className} style={style}>
      {children}
    </ContainerStyled>
  );
}
Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};
