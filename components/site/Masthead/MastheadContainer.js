import React from 'react';
import PropTypes from 'prop-types';
import { Box } from "@twilio-paste/core/box";

export const MastheadContainer = ({ children }) => {
  return (
    <Box
      as="header"
      backgroundColor="colorBackgroundPrimaryDarkest"
      color="colorTextInverse"
      position="sticky"
      top="0"
      zIndex="2000"
      borderBottomColor="colorBorderInverseWeaker"
      borderBottomStyle="solid"
      borderWidth="borderWidth10"
    >
      {children}
    </Box>
  );
};
MastheadContainer.displayName = "MastheadContainer";
MastheadContainer.propTypes = {
  children: PropTypes.node.isRequired
};
