import React from 'react';

import { LABEL_COPYRIGHT, LABEL_ICON_GIHTUB, LABEL_ICON_TWITTER } from '../../../../utils/labels';

import { HStack, Text, Anchor, ImageIcon } from '../../../library';
import FooterStyled from './Footer.styled';

export function Footer() {
  return (
    <FooterStyled>
      <HStack width="initial" spacing={0}>
        <Text>&copy; </Text>
        <Text size="sm">{LABEL_COPYRIGHT}</Text>
      </HStack>
      <HStack spacing={1}>
        <Anchor url={process.env.REACT_APP_GITHUB_PROFILE}>
          <ImageIcon name="github" label={LABEL_ICON_GIHTUB} />
        </Anchor>
        <Anchor url={process.env.REACT_APP_TWITTER_PROFILE}>
          <ImageIcon name="twitter" label={LABEL_ICON_TWITTER} />
        </Anchor>
      </HStack>
    </FooterStyled>
  );
}
