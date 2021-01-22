import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useUID } from '@twilio-paste/core/uid-library';
import { HelpText } from '@twilio-paste/core/help-text';
import { Input } from '@twilio-paste/core/input';
import { Label } from '@twilio-paste/core/label';
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from '@twilio-paste/core/modal';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';

const defaultValues = { serviceName: '', serviceSID: '' };

export const CreateServiceModal = ({ isModalOpen, handleClose, onSubmit }) => {
  // Form state
  const { handleSubmit, register, errors, reset, control } = useForm(defaultValues);
  // Form unique IDs
  const modalHeadingID = useUID();
  const serviceNameID = useUID();
  const serviceSidID = useUID();

  React.useEffect(() => {
    if (!isModalOpen) {
      reset(defaultValues);
    }
  }, [isModalOpen, reset]);

  return (
    <Modal ariaLabelledby={modalHeadingID} isOpen={isModalOpen} onDismiss={handleClose} size="default">
      <ModalHeader>
        <ModalHeading as="h3" id={modalHeadingID}>
          Create new service
        </ModalHeading>
      </ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <Stack orientation="vertical" spacing="space70">
            <Box>
              <Label htmlFor={serviceNameID} required>
                Service Name
              </Label>
              <Controller
                as={Input}
                id={serviceNameID}
                name="serviceName"
                control={control}
                type="text"
                defaultValue=""
                rules={{
                  required: 'Please enter a service name.',
                  minLength: {
                    value: 2,
                    message: 'Please enter more than two characters',
                  },
                }}
              />
              {errors.serviceName && <HelpText variant="error">{errors.serviceName.message}</HelpText>}
            </Box>
            <Box>
              <Label htmlFor={serviceSidID} required>
                SID
              </Label>
              <Controller
                as={Input}
                id={serviceSidID}
                name="serviceSID"
                control={control}
                type="text"
                defaultValue=""
                rules={{
                  required: 'Please enter a SID value.',
                  minLength: {
                    value: 2,
                    message: 'Please enter more than two characters',
                  },
                }}
              />
              {errors.serviceSID && <HelpText variant="error">{errors.serviceSID.message}</HelpText>}
            </Box>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
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
  );
};
