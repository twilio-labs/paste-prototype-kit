import React from 'react';
import Link from 'next/link';
import { Box } from '@twilio-paste/core/box';
import { MediaObject, MediaBody, MediaFigure } from '@twilio-paste/core/media-object';
import { LogoTwilioIcon } from '@twilio-paste/icons/cjs/LogoTwilioIcon';

export const MastheadLogo = () => {
  return (
    <MediaObject verticalAlign="center">
      <MediaFigure spacing="space60">
        <Link href="/" passHref>
          <Box
            as="a"
            color="colorTextInverse"
            display="block"
            _focus={{ boxShadow: 'shadowFocusInverse', outline: 'none' }}
          >
            <LogoTwilioIcon decorative={true} size="sizeIcon70" />
          </Box>
        </Link>
      </MediaFigure>
      <MediaBody>
        <Link href="/" passHref>
          <Box
            as="a"
            color="colorTextInverse"
            display="block"
            textDecoration="none"
            _hover={{
              textDecoration: 'underline',
            }}
            _focus={{ boxShadow: 'shadowFocusInverse', outline: 'none' }}
          >
            <Box as="span" display="block" fontSize="fontSize40" fontWeight="fontWeightBold" lineHeight="lineHeight40">
              Paste
            </Box>
            <Box as="span" display="block" fontSize="fontSize20">
              Prototyping Kit
            </Box>
          </Box>
        </Link>
      </MediaBody>
    </MediaObject>
  );
};
