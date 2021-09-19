import React from 'react';

import { render, screen } from '../../../../tests/utils/rtl-helper';
import { LABEL_COPYRIGHT, LABEL_ICON_GIHTUB, LABEL_ICON_TWITTER } from '../../../../utils/labels';

import { Footer } from './Footer';

describe('component - layout - <Footer />', () => {
  test('should properly display every information', () => {
    render(<Footer />);

    expect(screen.getByText(LABEL_COPYRIGHT)).toBeInTheDocument();
    expect(screen.getByText(LABEL_ICON_GIHTUB)).toBeInTheDocument();
    expect(screen.getByText(LABEL_ICON_TWITTER)).toBeInTheDocument();
  });
});
