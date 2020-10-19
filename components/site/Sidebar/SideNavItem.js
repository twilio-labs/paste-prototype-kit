import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

const SideNavItem = ({ children }) => {
  return (
    <Box as="li" margin="space20" fontSize="fontSize30" lineHeight="lineHeight20">
      {children}
    </Box>
  );
};

SideNavItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SideNavItem };
