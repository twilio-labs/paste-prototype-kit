import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { Flex } from '@twilio-paste/core/flex';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';

export default function Home() {
  const [data, setData] = React.useState([
    {
      id: 1,
      friendlyName: 'first service',
      sid: 4392908903,
    },
    {
      id: 2,
      friendlyName: 'second service',
      sid: 8439025738,
    },
    {
      id: 3,
      friendlyName: 'third service',
      sid: 8439025703,
    },
    {
      id: 4,
      friendlyName: 'fourth service',
      sid: 6239485739,
    },
  ]);

  const toaster = useToaster();

  const handleDelete = (service) => {
    toaster.push({
      message: 'Service was successfully deleted.',
      variant: 'success',
      dismissAfter: 3000,
    });
    const updatedServices = data.filter((serviceObj) => serviceObj.id != service.id);
    setData(updatedServices);
  };

  return (
    <>
      <Toaster {...toaster} />
      <Heading as="h1" variant="heading10">
        <Flex hAlignContent="between" vAlignContent="center">
          Services
        </Flex>
        <Paragraph>
          Services enable you to organize and identify your conversations by use case, or manage them in multiple
          environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your
          recepients' data.
        </Paragraph>
      </Heading>

      <Table>
        <THead>
          <Tr>
            <Th>Friendly Name</Th>
            <Th>SID</Th>
            <Th>Actions</Th>
          </Tr>
        </THead>
        <TBody>
          {data.map((service) => {
            return (
              <Tr key={service.id}>
                <Td>
                  <Text>{service.friendlyName}</Text>
                </Td>
                <Td>
                  <Text as="span" fontFamily="fontFamilyCode">
                    {service.sid}
                  </Text>
                </Td>
                <Td>
                  <Button
                    id={service.id}
                    size="icon_small"
                    variant="destructive_secondary"
                    onClick={() => handleDelete(service)}
                  >
                    <DeleteIcon title="Delete" id={service.id} />
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </>
  );
}
