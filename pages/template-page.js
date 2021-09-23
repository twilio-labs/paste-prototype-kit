import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';

import { PrototypeAnchor } from '../components/site/PrototypeAnchor';

export default function Home() {
  return (
    <>
      <Heading as="h1" variant="heading10">
        Template Page
      </Heading>
      <Paragraph>
        Back to home <PrototypeAnchor href="/">Home</PrototypeAnchor>.
      </Paragraph>
    </>
  );
}
