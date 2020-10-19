import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

const currentStyles = {
  backgroundColor: 'colorBackgroundDark',
  color: 'colorText',
  fontWeight: 'fontWeightBold',
};

const SideNavAnchor = React.forwardRef(({ children, nested, isCurrent, ...props }, ref) => {
  return (
    <Box
      as="a"
      aria-current={isCurrent ? 'page' : null}
      cursor="pointer"
      position="relative"
      display="block"
      width="100%"
      padding="space30"
      paddingLeft={nested ? 'space110' : 'space90'}
      fontWeight="fontWeightNormal"
      color="colorText"
      textDecoration="none"
      transition="0.1s background-color ease-in-out"
      outline="none"
      borderRadius="borderRadius10"
      {...(isCurrent && currentStyles)}
      _hover={{
        color: 'colorText',
        textDecoration: 'underline',
      }}
      _focus={{
        boxShadow: 'shadowFocus',
        textDecoration: 'underline',
      }}
      _expanded={{
        fontWeight: 'fontWeightBold',
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

SideNavAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  nested: PropTypes.bool,
  isCurrent: PropTypes.bool,
};
SideNavAnchor.defaultProps = {
  nested: false,
  isCurrent: false,
};

export { SideNavAnchor };
