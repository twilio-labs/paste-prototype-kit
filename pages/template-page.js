import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Card } from '@twilio-paste/core/card';
import { OrderedList, UnorderedList, ListItem } from '@twilio-paste/core/list';
import { Stack } from '@twilio-paste/core/stack';
import { Alert } from '@twilio-paste/core/alert';
import { Text } from '@twilio-paste/core/text';
import { Box } from '@twilio-paste/core/box';
import { Disclosure, DisclosureHeading, DisclosureContent } from '@twilio-paste/core/disclosure';

import { PrototypeAnchor } from '../components/site/PrototypeAnchor';
import { Code } from '../components/site/Code';

export default function Home() {
  return (
    <>
      <Heading as="h1" variant="heading10">
        Template Page
      </Heading>
      <Box marginBottom="space40">
        <Alert variant="neutral">
          <Text>
            <strong>
              Finish steps 1-3 on the <PrototypeAnchor href="/">home</PrototypeAnchor> page
            </strong>{' '}
            to learn about creating pages and navigation links.
          </Text>
        </Alert>
      </Box>
      <Stack orientation="vertical" spacing="space60">
        <Card>
          <Heading as="h3" variant="heading30">
            4. Edit Page Content
          </Heading>
          <Paragraph>
            To edit content on a page, go to its file in the <Code>pages</Code> folder. If you&apos;re following along
            with the demo, this is an <strong>&quot;About Me&quot;</strong> page with the wrong title. Let&apos;s change
            that.
          </Paragraph>
          <Paragraph>
            To edit the title of this page:
            <OrderedList>
              <ListItem>
                Open the <Code>about-me</Code> file created in step 1.
              </ListItem>
              <ListItem>
                Find the first &lt;Heading&gt; component in the file. It will have the words{' '}
                <strong>Template Page</strong> inside the &lt;Heading&gt; tags.
              </ListItem>
              <ListItem>
                Replace the words <strong>Template Page</strong> with <strong>About Me</strong>.
              </ListItem>
            </OrderedList>
          </Paragraph>
          <Paragraph>
            Once you save your work, the page title will change to <strong>&quot;About Me&quot;</strong>!
          </Paragraph>
          <Disclosure>
            <DisclosureHeading as="h4" variant="heading50">
              More Details
            </DisclosureHeading>
            <DisclosureContent>
              <UnorderedList>
                <ListItem>
                  You can verify the page&apos;s corresponding file name by looking at its URL. For example, to edit a
                  page with a /about-me URL, edit the <Code>about-me.js</Code> file.
                </ListItem>
                <ListItem>
                  If you have trouble finding a component on a page, search for it using ctrl/cmd + f.
                </ListItem>
              </UnorderedList>
            </DisclosureContent>
          </Disclosure>
        </Card>
        <Card>
          <Heading as="h3" variant="heading30">
            5. Add New Content
          </Heading>
          <Paragraph>
            A Paste component <strong>must be imported</strong> at the top of a file to be used in that file (and show
            up on that page). Go to the{' '}
            <PrototypeAnchor showExternal href="https://paste.twilio.design/components">
              Paste Docs
            </PrototypeAnchor>
            for a full list of components you can add.
          </Paragraph>
          <Paragraph>To practice, let&apos;s add in a &lt;Separator&gt; component</Paragraph>
          <Paragraph>
            To add a component to the <strong>&quot;About Me&quot;</strong> page:
            <OrderedList>
              <ListItem>
                Find the import statements at the top of the <Code>about-me.js</Code> file.
              </ListItem>
              <ListItem>
                Add the new component&apos;s import statement below the existing ones. For the &lt;Separator&gt;
                component, this statement is{' '}
                <Code>import &#123; Separator &#125; from &apos;@twilio-paste/core/separator&apos;;</Code>
              </ListItem>
              <ListItem>
                Add the component itself into the code. For the &lt;Separator&gt; component, make a new line after the
                closing tag of the Heading component you edited in step 3 (looks like <Code>&lt;/Heading&gt;</Code>).
                Then copy the following code and paste it into the new line:{' '}
                <Code>&lt;Separator orientation=&quot;horizontal&quot; verticalSpacing=&quot;space50&quot; /&gt;</Code>
              </ListItem>
            </OrderedList>
            <Paragraph>
              Once you save your work, a thin, horizontal separator line will appear beneath your heading!
            </Paragraph>
          </Paragraph>
          <Disclosure>
            <DisclosureHeading as="h4" variant="heading50">
              More Details
            </DisclosureHeading>
            <DisclosureContent>
              <UnorderedList>
                <ListItem>
                  You can adjust components by changing their properties, also called props. In the{' '}
                  <strong>Separator</strong> component, verticalSpacing is a prop. Adjust it to &quot;space100&quot;
                  instead of &quot;space50&quot; to see what happens.{' '}
                  <PrototypeAnchor showExternal href="https://paste.twilio.design/components/separator">
                    More about Separator
                  </PrototypeAnchor>
                </ListItem>
                <ListItem>
                  Be careful when adding content from one page to another. You must have{' '}
                  <strong>import statements for every component</strong> used on a page. When copying and pasting
                  patterns, include the imports.
                </ListItem>
              </UnorderedList>
            </DisclosureContent>
          </Disclosure>
        </Card>
        <Card>
          <Heading as="h3" variant="heading30">
            6. Connect Pages Internally
          </Heading>
          <Paragraph>
            Connect different pages in this kit to each other by using the &lt;PrototypeAnchor&gt; component to create
            links.
          </Paragraph>
          <Paragraph>
            To practice, let&apos;s add a link to this page that leads back to the <strong>&quot;Home&quot;</strong>{' '}
            page.
          </Paragraph>
          <Paragraph>
            To add a link in the <strong>&quot;About Me&quot;</strong> page for the <strong>&quot;Home&quot;</strong>{' '}
            page:
            <OrderedList>
              <ListItem>
                Create a new line under the closing tag of the &lt;Heading&gt; component in the <Code>about-me.js</Code>{' '}
                file.
              </ListItem>
              <ListItem>
                Add the &lt;PrototypeAnchor&gt; component by copying the following code and pasting it into the new
                line:
                <Code>&lt;PrototypeAnchor&gt;&lt;/PrototypeAnchor&gt;</Code>
              </ListItem>
              <ListItem>
                Add the text of the link to the inside of the &lt;PrototypeAnchor&gt; component tags. For a link that
                says &quot;Go to Home&quot;, the component should now read:{' '}
                <Code>&lt;PrototypeAnchor&gt;Go to Home&lt;/PrototypeAnchor&gt;</Code>
              </ListItem>
              <ListItem>
                Add a reference for the page the link leads to. The home page has the reference &quot;/&quot;. Specify
                the reference by adding <Code>href=&quot;/&quot;</Code> inside of the opening &lt;PrototypeAnchor&gt;
                component tag. It should now read:{' '}
                <Code>&lt;PrototypeAnchor href=&quot;/&quot;&gt;Go to Home&lt;/PrototypeAnchor&gt;</Code>
              </ListItem>
            </OrderedList>
            <Paragraph>Save your work and click on the link to check that it works!</Paragraph>
          </Paragraph>
          <Disclosure>
            <DisclosureHeading as="h4" variant="heading50">
              More Details
            </DisclosureHeading>
            <DisclosureContent>
              <UnorderedList>
                <ListItem>
                  References to internal pages (pages in this kit) match the file structure of the <Code>pages</Code>{' '}
                  folder. For example:
                  <UnorderedList>
                    <ListItem>
                      &quot;/about-me&quot; refers to the page made by the <Code>about-me.js</Code> file. You can link
                      to it by using <Code>href=&quot;/about-me&quot;</Code>.
                    </ListItem>
                    <ListItem>
                      For nested pages, include the name of the parent folder before the name of the child page. For
                      example: <Code>href=&quot;/phone-numbers/active-numbers&quot;</Code> would refer to a page made by
                      a <Code>active-numbers.js</Code> file inside of a <Code>phone-numbers</Code> folder (all this
                      inside the <Code>pages</Code> folder).
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  <strong>To link to an external page,</strong> include the string <Code>showExternal</Code> inside of
                  the opening &lt;PrototypeAnchor&gt; component tag, and refer to the full URL of the page you&apos;re
                  linking to. The component for an external link to the Paste Docs looks like:{' '}
                  <Code>
                    &lt;PrototypeAnchor showExternal href=&quot;https://paste.twilio.design/&quot;&gt;The Paste
                    Docs&lt;/PrototypeAnchor&gt;
                  </Code>
                </ListItem>
                <ListItem>
                  Make sure that an <strong>import statement</strong> exists for the &lt;PrototypeAnchor&gt; component
                  before using it. This component is specific to the prototyping kit, so its import statement will look
                  a little different. Use this code snippet if there is no import statement for the
                  &lt;PrototypeAnchor&gt; component in your file:
                  <Code>import &#123; PrototypeAnchor &#125; from &apos;../components/site/PrototypeAnchor&apos;;</Code>
                  . <strong>Note:</strong> this import statement will need to be adjusted for nested &quot;child&quot;
                  pages to include another &quot;../&quot; at the beginning of the string following <Code>from</Code>.
                </ListItem>
              </UnorderedList>
            </DisclosureContent>
          </Disclosure>
        </Card>
        <Card>
          <Heading as="h3" variant="heading30">
            7. Check Out Patterns
          </Heading>
          <Paragraph>Reusable patterns are created from putting many components together for a specific use.</Paragraph>
          <Paragraph>
            Go to the <PrototypeAnchor href="/patterns/delete">delete pattern</PrototypeAnchor> page or the{' '}
            <PrototypeAnchor href="/patterns/create-standard">create pattern</PrototypeAnchor> page to learn about using
            them in your prototype.
          </Paragraph>
          <Paragraph>
            <PrototypeAnchor showExternal href="https://paste.twilio.design/patterns">
              More about patterns
            </PrototypeAnchor>
          </Paragraph>
        </Card>
      </Stack>
      <Paragraph>
        Back to home <PrototypeAnchor href="/">Home</PrototypeAnchor>.
      </Paragraph>
    </>
  );
}
