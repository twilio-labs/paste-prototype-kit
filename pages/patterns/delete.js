import React, { useState } from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { DeleteTable } from '../../components/site/patterns/DeleteTable';
import { DeleteConfirm } from '../../components/site/patterns/DeleteConfirm';

const severity = 'medium';
const pageHeading = 'Services';
const tableDescription =
  'Services enable you to organize and identify your conversations by use case, or manage them in multiple environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your recepients&apos; data.';
const emptyState = 'Nothing to delete here!';
const columns = ['friendlyName', 'sid', 'greetings'];
const initialRows = [
  [
    <Text as="span" fontFamily="fontFamilyText">
      Fiiiiiiiiirst thing
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      4392908903
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      hi
    </Text>,
  ],
  [
    <Text as="span" fontFamily="fontFamilyCode">
      Second Thing
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      8439025738
    </Text>,
    <Text as="span" fontFamily="fontFamilyText">
      hello
    </Text>,
  ],
  [
    <Text as="span" fontFamily="fontFamilyCode">
      Third thing
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      8439025738
    </Text>,
  ],
  [
    <Text as="span" fontFamily="fontFamilyCode">
      Fourth this
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      6239485739
    </Text>,
  ],
];

export default function Delete() {
  const [rows, setRows] = useState(initialRows);

  const toaster = useToaster();
  const [isOpen, setIsOpen] = React.useState(false);
  const [serviceToDelete, setServiceToDelete] = React.useState({});

  const deleteService = (serviceObj) => {
    toaster.push({
      message: `${serviceObj.friendlyName.props.children} was successfully deleted.`,
      variant: 'success',
      dismissAfter: 3000,
    });
    const updatedServices = data.filter((service) => service.id !== serviceObj.id);
    setData(updatedServices);
    setServiceToDelete({});
  };

  const handleDelete = (serviceObj) => {
    if (severity === 'low') {
      deleteService(serviceObj);
    } else if (severity === 'medium') {
      setIsOpen(true);
      setServiceToDelete(serviceObj);
    }
  };

  return (
    <>
      <Toaster {...toaster} />
      <Heading as="h1" variant="heading10">
        {pageHeading}
      </Heading>
      <Paragraph>{tableDescription}</Paragraph>
      <DeleteTable columns={columns} rows={rows} emptyState={emptyState} handleDelete={handleDelete} />
      <DeleteConfirm service={serviceToDelete} isOpen={isOpen} setIsOpen={setIsOpen} deleteService={deleteService} />
    </>
  );
}
