import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter.svg';
import { styleImageIcon, getWidth, getHeight } from './ImageIcon.style';
import { colorSchemePropType } from '../../../utils/prop-types-schemas';

const icons = {
  github: GithubIcon,
  twitter: TwitterIcon,
};

function UnStyledImageIcon({ className, style, name, size, label }) {
  const Icon = icons[name];

  return Icon ? <Icon aria-label={label} className={className} style={style} width={getWidth({ size })} height={getHeight({ size })} /> : <></>;
}

const ImageIconStyled = styleImageIcon(UnStyledImageIcon);

export function ImageIcon({ style = {}, colorScheme = 'white', size = 'md', ...restProps }) {
  return <ImageIconStyled style={style} colorScheme={colorScheme} size={size} {...restProps} />;
}

ImageIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  colorScheme: colorSchemePropType,
  name: PropTypes.oneOf(['github', 'twitter']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
};
