import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTE_STARTUP } from '../../../routes';
import { LABEL_RULES } from '../../../utils/labels';

import { Container, NavigationBar } from '../../helpers/layout';
import { Rule } from '../../library';
import RulesStyled from './Rules.styled';

export default function Rules() {
  const history = useHistory();

  function handleNavigateBack() {
    history.push(ROUTE_STARTUP);
  }

  return (
    <Container navbar={<NavigationBar onNavigateBack={handleNavigateBack} />}>
      <RulesStyled>
        {LABEL_RULES.map((rule, index) => (
          <Rule key={index} position={index + 1} content={rule} />
        ))}
      </RulesStyled>
    </Container>
  );
}
