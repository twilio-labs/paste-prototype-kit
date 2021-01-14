import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Heading } from '@twilio-paste/core/heading';
import { HelpText } from '@twilio-paste/core/help-text';
import { Input } from '@twilio-paste/core/input';
import { Label } from '@twilio-paste/core/label';
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from '@twilio-paste/core/modal';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Stack } from '@twilio-paste/core/stack';
import { Table, THead, TBody, Tr, Th, Td } from '@twilio-paste/core/table';
import { Text } from '@twilio-paste/core/text';
import { Theme } from '@twilio-paste/core/theme';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { useUID } from '@twilio-paste/core/uid-library';

//default data
const serviceData = [
  {
    name: 'Montanõ - Valencia',
    sid: 'SM0yc4mxi6cn4z13bte7qmflc2drc85mlp',
    created: 'Tue Jan 12 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
  },
  {
    name: 'Mante Inc',
    sid: 'SMl29llgoihx286uhxfb0yc5n0sg391x5n',
    created: 'Tue Jan 12 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
  },
  {
    name: 'Mante Inc',
    sid: 'SMxarke3v30fv17hauqn86a7nhgm3b5d87',
    created: 'Tue Jan 12 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
  },
  {
    name: 'Kihn - Ondricka',
    sid: 'US0yc4mxi6cn4z13bte7qmflc2drc85mlp',
    created: 'Tue Jan 12 2021 15:42:05 GMT-0700 (Mountain Standard Time)',
  },
];

function Create() {
  // Table state
  const [services, setServices] = React.useState(serviceData);
  // Modal state
  const [isModalOpen, setModalOpen] = React.useState(false);
  //Modal form state
  const [serviceName, setServiceName] = React.useState('');
  const [serviceSID, setServiceSID] = React.useState('');
  const { handleSubmit, register, errors } = useForm();

  // Form unique IDs
  const modalHeadingID = useUID();
  const serviceNameID = useUID();
  const serviceSidID = useUID();

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
    // // Show a success toast
    toaster.push({
      message: 'Service was successfully created.',
      variant: 'success',
      dismissAfter: 3000,
    });
    // // Close the modal
    closeModal();
    // reset form to initial state
    setServiceName('');
    setServiceSID('');
  };

  return (
    <Theme.Provider theme="default">
      {/* This renders in a portal so it can be anywhere in our JSX */}
      <Toaster {...toaster} />
      <Box marginBottom="space60" marginTop={['space10', 'space110']} marginLeft="space60" marginRight="space60">
        <Stack orientation="vertical" spacing="space70">
          <Box alignItems="center" display="flex">
            <Heading as="h1" variant="heading10" marginBottom="space0">
              Services
            </Heading>
            <Box marginLeft="auto">
              <Button variant="primary" onClick={openModal}>
                Create new service
              </Button>
              <Modal ariaLabelledby={modalHeadingID} isOpen={isModalOpen} onDismiss={closeModal} size="default">
                <ModalHeader>
                  <ModalHeading as="h3" id={modalHeadingID}>
                    Create new service
                  </ModalHeading>
                </ModalHeader>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <ModalBody>
                    <Stack orientation="vertical" spacing="space70">
                      <Box>
                        <Label htmlFor={serviceNameID} required>
                          Service Name
                        </Label>
                        <Input
                          onChange={(e) => setServiceName(e.currentTarget.value)}
                          id={serviceNameID}
                          name="serviceName"
                          type="text"
                          value={serviceName}
                          ref={register({
                            required: 'Please enter a service name.',
                            minLength: {
                              value: 2,
                              message: 'Please enter more than two characters',
                            },
                          })}
                        />
                        {errors.serviceName && <HelpText variant="error">{errors.serviceName.message}</HelpText>}
                      </Box>
                      <Box>
                        <Label htmlFor={serviceSidID} required>
                          SID
                        </Label>
                        <Input
                          onChange={(e) => setServiceSID(e.currentTarget.value)}
                          id={serviceSidID}
                          name="serviceSID"
                          type="text"
                          value={serviceSID}
                          ref={register({
                            required: 'Please enter a SID value.',
                            minLength: {
                              value: 2,
                              message: 'Please enter more than two characters',
                            },
                          })}
                        />
                        {errors.serviceSID && <HelpText variant="error">{errors.serviceSID.message}</HelpText>}
                      </Box>
                    </Stack>
                  </ModalBody>
                  <ModalFooter>
                    <ModalFooterActions>
                      <Button variant="secondary" onClick={closeModal}>
                        Cancel
                      </Button>
                      {/* This makes hitting the Enter key submit the form successfully */}
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </ModalFooterActions>
                  </ModalFooter>
                </form>
              </Modal>
            </Box>
          </Box>
          <Paragraph>
            Services enable you to organize and identify your conversations by use case, or manage them in multiple
            environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your
            recepients' data.
          </Paragraph>
          {services.length === 0 ? (
            <Text as="div">No services to display</Text>
          ) : (
            <Table tableLayout="fixed">
              <THead>
                <Tr>
                  <Th>Friendly Name</Th>
                  <Th>SID</Th>
                  <Th>Date Created</Th>
                </Tr>
              </THead>
              <TBody>
                {services.map(({ name, sid, created }, index) => {
                  return (
                    <Tr key={index}>
                      <Td>
                        <Anchor href="#">{name}</Anchor>
                      </Td>
                      <Td>
                        <Text as="span" fontFamily="fontFamilyCode">
                          {sid}
                        </Text>
                      </Td>
                      <Td>
                        <Text as="span">{created}</Text>
                      </Td>
                    </Tr>
                  );
                })}
              </TBody>
            </Table>
          )}
        </Stack>
      </Box>
    </Theme.Provider>
  );
}

export default Create;
