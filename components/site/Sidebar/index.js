import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { Spinner } from '@twilio-paste/core/spinner';

import { SidebarContainer } from './SidebarContainer';
import { SideNav } from './SideNav';
import { SideNavList } from './SideNavList';
import pages from '../../../pages/pages.json';

const SideBar = () => {
  return (
    <SidebarContainer>
      <SideNav>
        <SideNavList nav={pages} />
      </SideNav>
    </SidebarContainer>
  );
};

export { SideBar };
