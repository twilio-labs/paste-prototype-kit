import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

import { MastheadContainer } from './MastheadContainer';
import { MastheadLogo } from './MastheadLogo';

export const Masthead = ({ children }) => {
  return (
    <MastheadContainer>
      <Box display="flex">
        <Box minWidth="sizeSidebar" paddingX="space70" paddingY="space50">
          <MastheadLogo />
        </Box>
        <Box
          alignItems="center"
          borderLeftColor="colorBorderInverseDarker"
          borderLeftStyle="solid"
          borderLeftWidth="borderWidth10"
          display="flex"
          paddingX="space70"
          paddingY="space50"
          width="100%"
        >
          {children}
        </Box>
      </Box>
    </MastheadContainer>
  );
};
Masthead.displayName = 'Masthead';
Masthead.defaultProps = {
  children: undefined,
};
Masthead.propTypes = {
  children: PropTypes.node,
};
