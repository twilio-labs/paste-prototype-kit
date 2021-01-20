import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import DeleteButton from '../../components/site/patterns/delete-button';

export default function Delete() {

  const severity = 'low'

  const [data, setData] = React.useState([
    {
      id: 1,
      friendlyName: 'First Service',
      sid: 4392908903,
    },
    {
      id: 2,
      friendlyName: 'Second Service',
      sid: 8439025738,
    },
    {
      id: 3,
      friendlyName: 'Third Service',
      sid: 8439025703,
    },
    {
      id: 4,
      friendlyName: 'Fourth Service',
      sid: 6239485739,
    },
  ]);

  const toaster = useToaster();

  return (
    <>
      <Toaster {...toaster} />
      <Heading as="h1" variant="heading10">
        Services
      </Heading>
      <Paragraph>
        Services enable you to organize and identify your conversations by use case, or manage them in multiple
        environments (e.g. dev, stage, prod). This information held within a service is siloed, protecting both your
        recepients&apos; data.
      </Paragraph>

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
                  <Text as="span" fontFamily="fontFamilyText">
                    {service.friendlyName}
                  </Text>
                </Td>
                <Td>
                  <Text as="span" fontFamily="fontFamilyCode">
                    {service.sid}
                  </Text>
                </Td>
                <Td>
                  <DeleteButton service={service} data={data} setData={setData} severity={severity} toaster={toaster} />
                </Td>
              </Tr>
            );
          })}
        </TBody>
      </Table>
    </>
  );
}
