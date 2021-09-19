import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from './assets/logo.svg';
import colors from '../../../config/colors';

function UnStyledLogo({ className, size }) {
  return <LogoIcon className={className} width={getSideLength(size)} height={getSideLength(size)} />;
}

function getSideLength(size) {
  return { md: 100, lg: 200, xl: 300 }[size];
}

const StyledLogo = styled(UnStyledLogo)`
  path {
    fill: ${colors.background};
  }
`;

export function Logo({ size = 'md', ...restProps }) {
  return <StyledLogo size={size} {...restProps} />;
}
Logo.propTypes = {
  size: PropTypes.arrayOf(['md', 'lg', 'xl']),
};
