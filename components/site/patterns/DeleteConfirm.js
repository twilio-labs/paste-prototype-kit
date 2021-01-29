import React from 'react';
import { useUID } from '@twilio-paste/core/uid-library';
import { Button } from '@twilio-paste/core/button';
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from '@twilio-paste/core/modal';
import PropTypes from 'prop-types';

export const DeleteConfirm = ({ service, isOpen, setIsOpen, deleteService }) => {
  const modalHeadingID = useUID();
  const handleClose = () => setIsOpen(false);
  const handleConfirm = (serviceObj) => {
    deleteService(serviceObj);
    setIsOpen(false);
  };

  return (
    <div>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Delete service
          </ModalHeading>
        </ModalHeader>
        <ModalBody>You&apos;re about to delete {service[0]}. Would you like to proceed?</ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => handleConfirm(service)}>
              Delete
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DeleteConfirm.propTypes = {
  service: PropTypes.array,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  deleteService: PropTypes.func,
};

DeleteConfirm.defaultProps = {
  service: [],
  isOpen: false,
  setIsOpen: {},
  deleteService: {},
};
