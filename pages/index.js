import React from 'react';
import { Grid, Column } from '@twilio-paste/core/grid';
import { Box } from '@twilio-paste/core/box';
import { Card } from '@twilio-paste/core/card';
import { Stack } from '@twilio-paste/core/stack';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';

import { PrototypeAnchor } from '../components/site/PrototypeAnchor';
import { Code } from '../components/site/Code';
import { Anchor } from '@twilio-paste/core/dist/anchor';

export default function Home() {
  return (
    <>
      <Heading as="h1" variant="heading10">
        Welcome to the Paste Prototyping Kit
      </Heading>
      <Paragraph>
        The prototyping kit is a{' '}
        <PrototypeAnchor showExternal href="https://nextjs.org/">
          NextJS
        </PrototypeAnchor>{' '}
        app with Paste preloaded. It has everything you will need to create a fully functioning web based prototype
        using Paste components
      </Paragraph>
      <Grid gutter="space40" marginBottom="space70" equalColumnHeights>
        <Column>
          <Card>
            <Heading as="h3" variant="heading30">
              Creating pages
            </Heading>
            <Paragraph>
              Create pages in the <Code>pages</Code> directory. You can copy the <Code>template-page.js</Code> file to
              get you going. The name of the file in the <Code>pages</Code> directory will result in a route of the same
              name. e.g. <Code>template-page.js</Code> =&gt; <Code>/template-page</Code>.
            </Paragraph>
          </Card>
        </Column>
        <Column>
          <Card>
            <Heading as="h3" variant="heading30">
              Linking between pages
            </Heading>
            <Paragraph>
              <strong>Internal linking: </strong>Use the <Code>&lt;PrototypeAnchor /&gt;</Code> not the Paste Anchor. It
              is a wrapper around the Paste Anchor suitable for NextJS websites. It looks and behaves exactly like a{' '}
              <PrototypeAnchor href="https://paste.twilio.design/components/anchor" showExternal>
                Paste Anchor
              </PrototypeAnchor>
              .
            </Paragraph>
          </Card>
        </Column>
        <Column>
          <Card>
            <Heading as="h3" variant="heading30">
              Adding to the side nav
            </Heading>
            <Paragraph>
              To add links to the side bar, just follow the instructions to create a page. The sidebar will update
              automatically.
            </Paragraph>
            <Paragraph>
              <strong>N.B.</strong>The Prototyping Kit side bar navigation only supports a depth of two levels.
            </Paragraph>
          </Card>
        </Column>
      </Grid>
      <Heading as="h2" variant="heading20">
        Ways to get started
      </Heading>
      <Paragraph>The prototyping kit can be quickly deployed to the following platforms:</Paragraph>
      <Stack orientation="horizontal" spacing="space40">
        <Anchor display="inline-flex" href="https://githubbox.com/twilio-labs/paste-prototype-kit">
          <Box as="img" src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit in Codesandbox" />
        </Anchor>
        <Anchor
          display="inline-flex"
          href="https://vercel.com/import/project?template=https://github.com/twilio-labs/paste-prototype-kit/tree/main"
        >
          <Box as="img" src="https://vercel.com/button" alt="Deploy to Vercel" />
        </Anchor>
        <Anchor
          display="inline-flex"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/twilio-labs/paste-prototype-kit"
        >
          <Box as="img" src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
        </Anchor>
      </Stack>
    </>
  );
}
