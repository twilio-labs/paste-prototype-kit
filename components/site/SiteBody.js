import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

const SiteBody = ({ children }) => {
  return <Box display="flex">{children}</Box>;
};
SiteBody.propTypes = {
  children: PropTypes.node.isRequired,
};
export { SiteBody };
