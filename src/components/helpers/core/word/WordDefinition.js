import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Portal } from '../../../library';
import WordDefinitionStyled from './WordDefinition.styled';
import { gamePropType } from '../../../../utils/prop-types-schemas';
import { TEST_ID_WORD_DEFINITON } from '../../../../tests/utils/test-ids';

export function WordDefinition({ game, onWordDefinitonShown }) {
  const [shown, setShown] = useState(true);
  const { definitions = [] } = game.word;

  useEffect(() => {
    onWordDefinitonShown();

    const timeout = setTimeout(() => {
      setShown(false);
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return definitions.length > 0 ? (
    <Portal>
      <WordDefinitionStyled data-testid={TEST_ID_WORD_DEFINITON} className={getClassName(shown)}>
        <main>
          <div />
          <div>{definitions[0]}</div>
        </main>
      </WordDefinitionStyled>
    </Portal>
  ) : (
    <></>
  );
}
WordDefinition.propTypes = {
  game: gamePropType.isRequired,
  onWordDefinitonShown: PropTypes.func.isRequired,
};

function getClassName(shown) {
  return shown ? 'visible' : 'hidden';
}
