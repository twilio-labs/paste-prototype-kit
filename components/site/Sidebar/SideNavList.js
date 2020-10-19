import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

import { SideNavItem } from './SideNavItem';
import { SideNavLink } from './SideNavLink';
import { SideNavDisclosure } from './SideNavDisclosure';
import { kebabToSentence } from '../utils';

const SideNavList = ({ nav }) => {
  if (nav === null || nav === undefined) return false;
  return (
    <Box as="ul" padding="space0" margin="space0" listStyleType="none">
      {Object.keys(nav).map((item, index) => {
        if (nav[item].length > 0) {
          return <SideNavDisclosure section={item} items={nav[item]} />;
        }
        if (item === 'index') {
          return (
            <SideNavItem key={index}>
              <SideNavLink href="/">Home</SideNavLink>
            </SideNavItem>
          );
        }
        return (
          <SideNavItem key={index}>
            <SideNavLink href={`/${item}`}>{kebabToSentence(item)}</SideNavLink>
          </SideNavItem>
        );
      })}
    </Box>
  );
};

SideNavList.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SideNavList };
