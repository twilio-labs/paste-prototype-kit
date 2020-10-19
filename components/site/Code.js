import React from 'react';
import { Box } from '@twilio-paste/core/box';

const Code = (props) => (
  <Box
    as="code"
    backgroundColor="colorBackground"
    borderRadius="borderRadius20"
    fontFamily="fontFamilyCode"
    fontSize="fontSize20"
    padding="space20"
    {...props}
  />
);

export { Code };
