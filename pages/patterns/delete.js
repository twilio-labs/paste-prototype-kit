import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { DeleteTable } from '../../components/site/patterns/DeleteTable';

export default function Delete() {

  let severity = 'low'

  let [data, setData] = React.useState([
    {
      id: 1,
      friendlyName:
        <Text as="span" fontFamily="fontFamilyText">
          Fiiiiiiiiirst thing
        </Text>,
      sid: <Text as="span" fontFamily="fontFamilyCode">4392908903</Text>,
      thirdCol: <Text as="span">lskdfjl</Text>
    },
    {
      id: 2,
      friendlyName:
        <Text as="span" fontFamily="fontFamilyText">
          Second thing
        </Text>,
      sid: <Text as="span" fontFamily="fontFamilyCode">8439025738</Text>,
    },
    {
      id: 3,
      friendlyName:
        <Text as="span" fontFamily="fontFamilyText">
          Third thing
        </Text>,
      sid: <Text as="span" fontFamily="fontFamilyCode">8439025738</Text>,
    },
    {
      id: 4,
      friendlyName:
        <Text as="span" fontFamily="fontFamilyText">
          Third thing
        </Text>,
      sid: <Text as="span" fontFamily="fontFamilyCode">6239485739</Text>,
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

      <DeleteTable data={data} handleDelete={(id) => {
        console.log(id)
      }} />
    </>
  );
}
