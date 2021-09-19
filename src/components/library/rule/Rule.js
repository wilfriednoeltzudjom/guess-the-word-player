import React from 'react';
import PropTypes from 'prop-types';

import htmlParser from '../../../utils/html_parser';

import RuleStyled from './Rule.styled';
import { Text } from '..';

export function Rule({ position, content }) {
  return (
    <RuleStyled>
      <main>
        <Text colorScheme="background" size="sm" weight="bold">
          {position}
        </Text>
        <Text>{htmlParser.parseFromText(content)}</Text>
      </main>
    </RuleStyled>
  );
}
Rule.propTypes = {
  position: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
