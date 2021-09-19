import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { LABEL_BUTTON_EXIT, LABEL_LIVES_LEFT } from '../../../../utils/labels';
import { gamePropType } from '../../../../utils/prop-types-schemas';
import gameHelper from '../../../../utils/game.helper';

import { Button, Icon, Text, Badge, CountDown } from '../../../library';
import NavbarStyled from './Navbar.styled';

export function Navbar({ game, countDownRef, onExit, onCountExpired }) {
  function handleExit() {
    if (onExit) onExit();
  }

  const handleCountExpired = useCallback(() => {
    if (onCountExpired) onCountExpired();
  }, []);

  return (
    <NavbarStyled>
      <section>
        {gameHelper.canShowButtonExit(game) && (
          <Button variant="ghost" icon={<Icon name="exit" variant="outline" />} onClick={handleExit}>
            {LABEL_BUTTON_EXIT}
          </Button>
        )}
      </section>
      <section>
        <main>
          <aside>
            <div>
              <Icon name="heart" />
              <Text>{LABEL_LIVES_LEFT} :</Text>
              <Text>{game.remainingLives}</Text>
            </div>
            <Badge>{gameHelper.translateMode(game)}</Badge>
          </aside>

          <CountDown ref={countDownRef} startCountDown={gameHelper.canStartCountDown(game)} initialCount={game.remainingTime} onCountExpired={handleCountExpired} />
        </main>
      </section>
    </NavbarStyled>
  );
}
Navbar.propTypes = {
  game: gamePropType.isRequired,
  countDownRef: PropTypes.any,
  onExit: PropTypes.func,
  onCountExpired: PropTypes.func,
};
