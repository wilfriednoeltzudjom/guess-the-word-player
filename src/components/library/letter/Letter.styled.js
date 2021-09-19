import styled from 'styled-components';

import colors from '../../../config/colors';
import dimensions from '../../../config/dimensions';
import gameHelper from '../../../utils/game.helper';
import { fontSizes } from '../../../config/sizes';

export default styled.div`
  width: ${dimensions.letter.width};
  height: ${dimensions.letter.height};
  perspective: 500px;

  > main {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 800ms;
    transform-style: preserve-3d;

    &.flip {
      transform: rotateY(180deg);
    }

    > div {
      &.front,
      &.back {
        position: absolute;
        border-radius: ${dimensions.defaults.radius};
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
      }

      :nth-child(1) {
        background: ${colors.secondary};
      }

      :nth-child(2) {
        background: ${getSecondDivBackground};
        color: ${colors.white};
        font-size: ${fontSizes.xxl};
        font-weight: 700;
      }

      &.back {
        transform: rotateY(180deg);
      }
    }
  }
`;

function getSecondDivBackground({ value, game }) {
  if (gameHelper.isRunning(game)) return colors.secondaryDark;

  return gameHelper.hasLetterBeenFound(value, game) ? colors.secondaryDark : colors.red;
}
