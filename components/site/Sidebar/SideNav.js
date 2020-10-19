import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

const SideNav = ({ children }) => {
  return (
    <Box as="nav" marginTop="space70" marginX="space20" overflow="auto" role="navigation" aria-label="Main">
      {children}
    </Box>
  );
};

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SideNav };
