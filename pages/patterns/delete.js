/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { Alert } from '@twilio-paste/core/alert';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';

import { Code } from '../../components/site/Code';
import { DeleteConfirm } from '../../components/site/patterns/DeleteConfirm';
import { DeleteTable } from '../../components/site/patterns/DeleteTable';

/*
 * To change severity level (learn more about severity at paste.twilio.design/patterns/delete),
 * type 'low' or 'medium' below ('high' severity is not yet available).
 */

// To change what appears on the Delete Pattern page, edit the data below.

const severity = 'medium';
const pageHeading = 'Services';
const tableDescription =
  'Services enable you to organize and identify your conversations by use case, or manage them in multiple environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your recipients&apos; data.';
export const emptyState = 'Nothing to delete here!';
export const columns = ['friendlyName', 'sid', 'greetings'];
export const rows = [
  [
    <Text as="span" fontFamily="fontFamilyText">
      Fiiiiiiiiirst thing
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      4392908903
    </Text>,
    <Text as="span" fontFamily="fontFamilyText">
      hi
    </Text>,
  ],
  [
    <Text as="span" fontFamily="fontFamilyText">
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
    <Text as="span" fontFamily="fontFamilyText">
      Third thing
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      8439025738
    </Text>,
    <Text as="span" fontFamily="fontFamilyText">
      Welcome!
    </Text>,
  ],
  [
    <Text as="span" fontFamily="fontFamilyText">
      Fourth this
    </Text>,
    <Text as="span" fontFamily="fontFamilyCode">
      6239485739
    </Text>,
  ],
];

export default function Delete() {
  const [tableRows, setTableRows] = useState(rows);

  const toaster = useToaster();
  const [isOpen, setIsOpen] = React.useState(false);
  const [serviceToDelete, setServiceToDelete] = React.useState([]);

  const deleteService = (serviceRow) => {
    toaster.push({
      message: `${serviceRow[0].props.children} was successfully deleted.`,
      variant: 'success',
      dismissAfter: 3000,
    });
    const updatedServices = tableRows.filter((row) => tableRows.indexOf(serviceRow) !== tableRows.indexOf(row));
    setTableRows(updatedServices);
    setServiceToDelete([]);
  };

  const handleDelete = (serviceRow) => {
    if (severity === 'low') {
      deleteService(serviceRow);
    } else if (severity === 'medium') {
      setIsOpen(true);
      setServiceToDelete(serviceRow);
    } else {
      throw new Error(
        'No severity level was detected. Go back to delete.js and make sure to change severity to "low" or "medium"!',
      );
    }
  };

  return (
    <>
      <Box marginBottom="space100">
        <Alert variant="neutral">
          <Text as="span">
            <strong>Hello! </strong>To edit this page go to the &lsquo;pages&lsquo; folder and click the
            &lsquo;delete.js&lsquo; file. Check out the{' '}
            <Anchor href="https://paste.twilio.design/patterns/delete/" showExternal>
              Paste Delete Pattern documentation
            </Anchor>{' '}
            for more information. To get rid of this alert box, remove the <Code>{'<Box></Box>'}</Code> component from
            the bottom of the &lsquo;delete.js&lsquo; file.
          </Text>
        </Alert>
      </Box>
      <Heading as="h1" variant="heading10">
        {pageHeading}
      </Heading>
      <Paragraph>{tableDescription}</Paragraph>
      <DeleteTable columns={columns} rows={tableRows} emptyState={emptyState} handleDelete={handleDelete} />
      <DeleteConfirm service={serviceToDelete} isOpen={isOpen} setIsOpen={setIsOpen} deleteService={deleteService} />
      <Toaster {...toaster} />
    </>
  );
}
