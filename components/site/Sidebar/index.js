import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { Spinner } from '@twilio-paste/core/spinner';

import { SidebarContainer } from './SidebarContainer';
import { SideNav } from './SideNav';
import { SideNavList } from './SideNavList';
import { NavContext } from '../NavContext';

const SideBar = () => {
  const { nav, isLoading } = React.useContext(NavContext);

  return (
    <SidebarContainer>
      <SideNav>
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <Spinner title="loading..." />
          </Box>
        ) : (
          <SideNavList nav={nav} />
        )}
      </SideNav>
    </SidebarContainer>
  );
};

export { SideBar };
