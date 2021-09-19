import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import durations from '../../../config/durations';
import { ripple } from '../../../config/animations';

export default styled.button`
  display: ${getDisplay};
  position: relative;
  overflow: hidden;
  min-width: ${getMinWidth};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  padding: ${getPadding};
  background: ${getBackgroundColor};
  color: ${getTextColor};
  font-weight: 700;
  transition: all ${durations.tranisation} ease-in-out;
  cursor: ${getCursor};
  font-size: 1rem;

  :hover {
    background: ${(props) => getBackgroundColor(props, { hovered: true })};
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  > span {
    &.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ${ripple} 800ms linear;
      background-color: ${getRippleColor};
    }
  }

  > main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    > .icon {
      display: inline-block;
      margin-right: ${getIconMarginRight};
    }
  }
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getMinWidth({ shape, fluid }) {
  return fluid && shape === 'rounded' ? '100%' : dimensions.button.minWidth[shape];
}

function getBorder(props) {
  const { variant, colorScheme, disabled } = props;
  if (variant !== 'outline') return 'none';

  return `1px solid ${getColor(colorScheme, disabled)}`;
}

function getIconMarginRight({ shape }) {
  return { square: 0, rounded: '0.5rem', circle: 0 }[shape];
}

function getBorderRadius({ shape }) {
  return { square: dimensions.defaults.radius, rounded: dimensions.defaults.radius, circle: '50%' }[shape];
}

function getPadding({ icon, shape, size }) {
  return {
    square: () => (icon ? { md: '0.875rem', lg: '2rem' } : { md: '1rem', lg: '2rem' }),
    rounded: () => (icon ? { md: '0.875rem 1.25rem', lg: '1.25rem 2rem' } : { md: '1rem 1.25rem', lg: '1.25rem 2rem' }),
    circle: () => (icon ? { md: '0.875rem', lg: '2rem' } : { md: '1rem', lg: '2rem' }),
  }[shape]()[size];
}

function getBackgroundColor(props, { hovered = false } = {}) {
  const { colorScheme, variant, disabled } = props;
  if (variant === 'outline') return 'transparent';
  if (variant === 'ghost') return hovered ? colors.primary : 'transparent';

  return getColor(colorScheme, disabled, hovered);
}

function getTextColor({ colorScheme, variant, disabled }) {
  if (disabled) return colors.white;

  return variant === 'outline' ? colors[colorScheme] : { primary: colors.white, secondary: colors.black }[colorScheme];
}

function getColor(colorScheme, disabled, hovered) {
  return disabled ? colors.disabled : hovered ? colors[`${colorScheme}Light`] : colors[colorScheme];
}

function getCursor({ disabled }) {
  return disabled ? 'not-allowed' : 'pointer';
}

function getRippleColor() {
  return 'rgba(255, 255, 255, 0.7)';
}
