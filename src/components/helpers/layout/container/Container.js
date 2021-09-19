import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../../library';
import ContentStyled from './Content.styled';
import { Footer } from '../footer';

export default function ApplicationContainer({ navbar, children }) {
  return (
    <Container>
      {isValidElement(navbar) && navbar}
      <ContentStyled>{children}</ContentStyled>
      <Footer />
    </Container>
  );
}
ApplicationContainer.propTypes = {
  navbar: PropTypes.node,
};
