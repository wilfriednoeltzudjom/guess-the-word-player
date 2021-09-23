import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Portal } from '../../../library';
import WordDefinitionStyled from './WordDefinition.styled';
import { gamePropType } from '../../../../utils/prop-types-schemas';
import { TEST_ID_WORD_DEFINITON } from '../../../../tests/utils/test-ids';

export function WordDefinition({ game, onWordDefinitonShown }) {
  const [shown, setShown] = useState(true);
  const [showDuration, setShowDuration] = useState(0);
  const { definitions = [] } = game.word;

  useEffect(() => {
    if (definitions.length > 0) {
      const [definition] = definitions;
      setShowDuration(definition.length > 50 ? 9 : 5);
    }
  }, [definitions]);

  useEffect(() => {
    onWordDefinitonShown();

    const timeout = setTimeout(() => {
      setShown(false);
    }, showDuration * 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [showDuration]);

  return definitions.length > 0 && showDuration ? (
    <Portal>
      <WordDefinitionStyled data-testid={TEST_ID_WORD_DEFINITON} className={getClassName(shown)} showDuration={showDuration}>
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
