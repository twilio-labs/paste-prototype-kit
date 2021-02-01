import * as React from 'react';
import { render } from 'react-dom';
import { Theme } from '@twilio-paste/core/theme';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Alert } from '@twilio-paste/core/alert';
import { Text } from '@twilio-paste/core/text';
import { Anchor } from '@twilio-paste/core/anchor';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Stack } from '@twilio-paste/core/stack';
import { useToaster, Toaster } from '@twilio-paste/core/toast';

import { Code } from '../../components/site/Code';
import { CreateServiceModal } from '../../components/site/patterns/Create Patterns/CreateServiceModal';
import { ServicesTable } from '../../components/site/patterns/Create Patterns/ServicesTable';
import { serviceData } from '../../components/site/patterns/Create Patterns/data';

export default function Create() {
  // Table state
  const [services, setServices] = React.useState(serviceData);
  // Modal state
  const [isModalOpen, setModalOpen] = React.useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  // Toaster properties
  const toaster = useToaster();

  const handleFormSubmit = ({ serviceName, serviceSID }) => {
    // Update our table state
    setServices([
      {
        name: serviceName,
        sid: serviceSID,
        created: new Date().toString(),
      },
      ...services,
    ]);
    // Show a success toast
    toaster.push({
      message: 'Service was successfully created.',
      variant: 'success',
      dismissAfter: 3000,
    });
    // Close the modal
    closeModal();
  };

  return (
    <>
      <Box marginBottom="space100">
        <Alert variant="neutral">
          <Text as="span">
            <strong>Hello! </strong>To edit this page go to the &quot;pages&quot; folder and click the
            &quot;create-standard.js&quot; file. Check out the{' '}
            <Anchor href="https://paste.twilio.design/patterns/create/#standard" showExternal>
              Paste Create Pattern documentation
            </Anchor>{' '}
            for more information. To get rid of this alert box, remove the <Code>{'<Box></Box>'}</Code> component from
            the bottom of the &quot;create-standard.js&quot; file.
          </Text>
        </Alert>
      </Box>
      <Box marginBottom="space60" marginTop={['space10', 'space110']} marginLeft="space60" marginRight="space60">
        <Stack orientation="vertical" spacing="space70">
          <Box alignItems="center" display="flex">
            <Heading as="h1" variant="heading10" marginBottom="space0">
              Services
            </Heading>
            <Box marginLeft="auto" data-cy="create-new-service">
              <Button variant="primary" onClick={openModal}>
                Create new service
              </Button>
              {/* This renders the modal, depending isModalOpen */}
              <CreateServiceModal isModalOpen={isModalOpen} handleClose={closeModal} onSubmit={handleFormSubmit} />
            </Box>
          </Box>
          <Paragraph>
            Services enable you to organize and identify your conversations by use case, or manage them in multiple
            environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your
            recipients&apos; data.
          </Paragraph>
          {/* This renders the services table */}
          <ServicesTable services={services} />
        </Stack>
      </Box>
      <Toaster {...toaster} />

    </>
  );
}
