import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

export const MastheadContainer = ({ children }) => {
  return (
    <Box as="header" backgroundColor="colorBackgroundPrimaryDarkest" color="colorTextInverse" position="sticky" top="0">
      {children}
    </Box>
  );
};
MastheadContainer.displayName = 'MastheadContainer';
MastheadContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
