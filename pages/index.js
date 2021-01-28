import React from 'react';
import { Grid, Column } from '@twilio-paste/core/grid';
import { Box } from '@twilio-paste/core/box';
import { Card } from '@twilio-paste/core/card';
import { Stack } from '@twilio-paste/core/stack';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Anchor } from '@twilio-paste/core/anchor';
import { Alert } from '@twilio-paste/core/alert';
import { Text } from '@twilio-paste/core/text';
import { OrderedList, UnorderedList, ListItem } from '@twilio-paste/core/list';
import { Disclosure, DisclosureHeading, DisclosureContent } from '@twilio-paste/core/disclosure';
import { Separator } from '@twilio-paste/core/separator';

import { PrototypeAnchor } from '../components/site/PrototypeAnchor';
import { Code } from '../components/site/Code';

export default function Home() {
  return (
    <>
      <Heading as="h1" variant="heading10">
        Welcome to the Paste Prototyping Kit
      </Heading>
      <Separator orientation="horizontal" verticalSpacing="space50" />
      <Heading as="h2" variant="heading20">
        Getting Started
      </Heading>
      <Paragraph>
        Build your first prototype, an <strong>&quot;About Me&quot;</strong> page, by following our step-by-step guide.
      </Paragraph>
      <Box marginBottom="space40">
        <Alert variant="warning">
          <Text>
            <strong>Only edit files in the &apos;pages&apos; folder.</strong> It contains everything necessary to build
            your prototype.
          </Text>
        </Alert>
      </Box>
      <Stack orientation="vertical" spacing="space60">
        <Card>
          <Heading as="h3" variant="heading30">
            1. Create your New Page
          </Heading>
          <Paragraph>
            A page is created for every file in the <Code>pages</Code> folder. The easiest way to create a new page is
            by duplicating an existing one.
          </Paragraph>
          <Paragraph>
            Make a new page using <strong>&quot;Template Page&quot;</strong>:
            <OrderedList>
              <ListItem>
                Create a new file in the <Code>pages</Code> folder.
              </ListItem>
              <ListItem>
                Name the file <Code>about-me.js</Code>{' '}
              </ListItem>
              <ListItem>
                Go to the <Code>template-page.js</Code> file and copy all of its contents.
              </ListItem>
              <ListItem>
                Paste the contents into your <Code>about-me.js</Code> file
              </ListItem>
            </OrderedList>
          </Paragraph>
          <Paragraph>Congratulations! You just made your first new page on Paste.</Paragraph>
          <Disclosure>
            <DisclosureHeading as="h4" variant="heading50">
              More Details
            </DisclosureHeading>
            <DisclosureContent>
              <UnorderedList>
                <ListItem>
                  If you are working on your local machine (not CodeSandbox), you can simply duplicate the{' '}
                  <Code>template-page.js</Code> file and rename it to <strong> &quot;about-me&quot;</strong>.
                </ListItem>
                <ListItem>
                  You can visit your new page by appending the file name to your URL. For example, going to{' '}
                  <strong>/about-me</strong> will show you the page created by the <Code>about-me.js</Code> file.
                </ListItem>
                <ListItem>
                  To use one of the included patterns, duplicate that pattern&apos;s file instead of{' '}
                  <Code>template-page.js</Code> and follow the instructions on the pattern&apos;s page.
                </ListItem>
              </UnorderedList>
            </DisclosureContent>
          </Disclosure>
        </Card>
        <Card>
          <Heading as="h3" variant="heading30">
            2. Add your New Page to the Navigation
          </Heading>
          <Paragraph>
            To navigate to your new &quot;About Me&quot; page, a link to it must be included in the navigation bar.
            Links for the navigation are edited in the <Code>pages.json</Code> file in the <Code>pages</Code> folder.
          </Paragraph>
          <Paragraph>
            To add a link to the <strong>&quot;About Me&quot;</strong> page:
            <OrderedList>
              <ListItem>
                Open the <Code>pages.json</Code> file.
              </ListItem>
              <ListItem>
                Find the last list item- currently <Code>&quot;template-page&quot;: []</Code> - and add a comma to the
                end of the line, so that it reads <Code>&quot;template-page&quot;: [],</Code>. Then press return to make
                a new line.
              </ListItem>
              <ListItem>
                Type in <Code>&quot;about-me&quot;: []</Code> in the new line.
                <Paragraph>
                  Make sure the the string in quotes matches the file name of the page you&apos;re linking to. In this
                  demo, the file for the &quot;About Me&quot; page is called <Code>about-me.js</Code>.
                </Paragraph>
              </ListItem>
            </OrderedList>
          </Paragraph>
          <Paragraph>Once you save your work, a new &quot;About Me&quot; link will pop up in the navigation!</Paragraph>
          <Disclosure>
            <DisclosureHeading as="h4" variant="heading50">
              More Details
            </DisclosureHeading>
            <DisclosureContent>
              <UnorderedList>
                <ListItem>
                  <strong>Commas matter here!</strong> If you are adding to the middle of the list, end your new line
                  with a comma. If you are adding to the end of the list, the last list item should not end with a
                  comma. When you encounter errors adding to the <Code>pages</Code> folder, check comma placement first.
                </ListItem>
                <ListItem>
                  You can nest navigation links, so that a <strong>parent</strong> link opens up below a list of{' '}
                  <strong>child</strong> links inside the navigation bar. You will need a folder inside the{' '}
                  <Code>pages</Code> folder with the same name as the &quot;parent&quot; link, with the pages of the
                  &quot;children&quot; links inside. To add this to the navigation:
                  <UnorderedList>
                    <ListItem>
                      Use the above instructions to add a line to the <Code>pages.json</Code> file for the parent folder
                      name.
                    </ListItem>
                    <ListItem>
                      Add the file names of the &quot;children&quot; links into the brackets. Separate multiple file
                      with commas.
                    </ListItem>
                    <ListItem>
                      Save your work. If errors occur, check your commas in the file (detailed above).
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </DisclosureContent>
          </Disclosure>
        </Card>
        <Card>
          <Heading as="h3" variant="heading30">
            3. Follow your New Link
          </Heading>
          <Paragraph>
            Finish your demo by clicking on your new <strong>&quot;About Me&quot;</strong> navigation link to edit the
            page&apos;s contents.
          </Paragraph>
        </Card>
      </Stack>
      <Separator orientation="horizontal" verticalSpacing="space200" />
      <Heading as="h2" variant="heading30">
        About the Paste Prototyping Kit
      </Heading>
      <Paragraph>
        The prototyping kit is a{' '}
        <PrototypeAnchor showExternal href="https://nextjs.org/">
          NextJS
        </PrototypeAnchor>{' '}
        app with Paste preloaded. It has everything you will need to create a fully functioning web based prototype
        using Paste components.
      </Paragraph>
      <Paragraph>
        <strong>Edit your prototype </strong>right in your browser using CodeSandbox
      </Paragraph>
      <Anchor display="inline-flex" href="https://githubbox.com/twilio-labs/paste-prototype-kit">
        <Box
          marginBottom="space80"
          as="img"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
          alt="Edit in Codesandbox"
        />
      </Anchor>
      <Paragraph>
        <strong>Share your prototype quickly</strong> by deploying it using Vercel or Netlify:
      </Paragraph>
      <Stack orientation="horizontal" spacing="space40">
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
