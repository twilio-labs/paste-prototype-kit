import * as React from 'react';
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
import { CreateServiceModal } from '../../components/site/patterns/create-patterns/CreateServiceModal';
import { ServicesTable } from '../../components/site/patterns/create-patterns/ServicesTable';

/*
 * Comment the other and uncomment this to view/edit the empty state
 * export const serviceData = [];
 */

export default function Create() {
  // column names
  const NameForColumn1 = 'Service Name';
  const NameForColumn2 = 'SID';
  const NameForColumn3 = 'Created';
  // example sample data
  const exampleServiceData = [
    {
      [NameForColumn1]: 'Montanõ - Valencia',
      [NameForColumn2]: 'SM0yc4mxi6cn4z13bte7qmflc2drc85mlp',
      [NameForColumn3]: 'Tue Jan 12 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
    },
    {
      [NameForColumn1]: 'Mante Inc',
      [NameForColumn2]: 'SMl29llgoihx286uhxfb0yc5n0sg391x5n',
      [NameForColumn3]: 'Tue Jan 13 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
    },
    {
      [NameForColumn1]: 'Mante Inc',
      [NameForColumn2]: 'SMxarke3v30fv17hauqn86a7nhgm3b5d87',
      [NameForColumn3]: 'Tue Jan 14 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
    },
    {
      [NameForColumn1]: 'Kihn - Ondricka',
      [NameForColumn2]: 'US0yc4mxi6cn4z13bte7qmflc2drc85mlp',
      [NameForColumn3]: 'Tue Jan 15 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
    },
  ];

  // Table state
  const [services, setServices] = React.useState(exampleServiceData);
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
        [NameForColumn1]: serviceName,
        [NameForColumn2]: serviceSID,
        [NameForColumn3]: new Date().toString(),
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
            for more information. To get rid of this alert box, remove the first <Code>{'<Box></Box>'}</Code> component,
            and its contents, from the &quot;create-standard.js&quot; file.
          </Text>
        </Alert>
      </Box>
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
            <CreateServiceModal
              isModalOpen={isModalOpen}
              handleClose={closeModal}
              onSubmit={handleFormSubmit}
              col1={NameForColumn1}
              col2={NameForColumn2}
            />
          </Box>
        </Box>
        <Paragraph>
          Services enable you to organize and identify your conversations by use case, or manage them in multiple
          environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your
          recipients&apos; data.
        </Paragraph>
        {/* This renders the services table */}
        <ServicesTable services={services} col1={NameForColumn1} col2={NameForColumn2} col3={NameForColumn3} />
      </Stack>

      <Toaster {...toaster} />
    </>
  );
}
