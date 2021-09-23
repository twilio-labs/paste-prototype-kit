import React from 'react';
import PropTypes from 'prop-types';
import { useUIDSeed } from '@twilio-paste/core/uid-library';
import {
  DisclosurePrimitive,
  DisclosurePrimitiveContent,
  useDisclosurePrimitiveState,
} from '@twilio-paste/core/disclosure-primitive';
import { Box } from '@twilio-paste/core/box';

import { SideNavItem } from './SideNavItem';
import { SideNavLink } from './SideNavLink';
import { SideNavDisclosureButton } from './SideNavDisclosureButton';
import { kebabToSentence } from '../utils';

const SideNavDisclosure = ({ section, items }) => {
  const disclosure = useDisclosurePrimitiveState();
  const navSeed = useUIDSeed();
  return (
    <SideNavItem>
      <DisclosurePrimitive
        {...disclosure}
        as={SideNavDisclosureButton}
        aria-expanded={disclosure.visible ? 'true' : 'false'}
      >
        {kebabToSentence(section)}
      </DisclosurePrimitive>
      <DisclosurePrimitiveContent {...disclosure}>
        <Box as="ul" padding="space0" margin="space0" listStyleType="none">
          {items.map((item, index) => {
            return (
              <SideNavItem key={navSeed(`nav-item-${index}`)}>
                <SideNavLink href={`/${section}/${item}`} nested>
                  {kebabToSentence(item)}
                </SideNavLink>
              </SideNavItem>
            );
          })}
        </Box>
      </DisclosurePrimitiveContent>
    </SideNavItem>
  );
};
SideNavDisclosure.propTypes = {
  section: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export { SideNavDisclosure };
