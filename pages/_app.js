import React from 'react';
import Head from 'next/head';
import { Theme } from '@twilio-paste/core/theme';
import { StylingGlobals } from '@twilio-paste/core/styling-library';
import { Alert } from '@twilio-paste/core/alert';
import { Anchor } from '@twilio-paste/core/anchor';

import { fontStyles } from '../styles/fonts';
import { Masthead } from '../components/site/Masthead';
import { SiteBody } from '../components/site/SiteBody';
import { SiteMain } from '../components/site/SiteMain';
import { SideBar } from '../components/site/Sidebar';
import { NavProvider } from '../components/site/NavContext';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Theme.Provider theme="default">
      <StylingGlobals styles={fontStyles} />
      <Head>
        <title>Prototype kit</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Alert variant="neutral">
        <strong>N.B.</strong> This is a prototype using the{' '}
        <Anchor href="https://paste.twilio.design" showExternal>
          Paste Design System
        </Anchor>
        .
      </Alert>
      <NavProvider>
        <Masthead>{/* Enter masthead content  */}</Masthead>
        <SiteBody>
          <SideBar />
          <SiteMain>
            <Component {...pageProps} />
          </SiteMain>
        </SiteBody>
      </NavProvider>
    </Theme.Provider>
  );
}

export default MyApp;
