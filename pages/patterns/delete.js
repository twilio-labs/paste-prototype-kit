import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { DeleteTable } from '../../components/site/patterns/DeleteTable';
import { DeleteConfirm } from '../../components/site/patterns/DeleteConfirm';

export default function Delete() {

  const severity = 'medium'

  const [data, setData] = React.useState([
    {
      id: 1,
      friendlyName:
        <Text as="span" fontFamily="fontFamilyText">
          Fiiiiiiiiirst thing
        </Text>,
      sid: <Text as="span" fontFamily="fontFamilyCode">4392908903</Text>
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
          last thing
        </Text>,
      sid: <Text as="span" fontFamily="fontFamilyCode">6239485739</Text>,
    },
  ]);

  const toaster = useToaster();
  const [isOpen, setIsOpen] = React.useState(false)
  const [serviceToDelete, setServiceToDelete] = React.useState({})

  const deleteService = (serviceObj) => {
    toaster.push({
      message: `${serviceObj.friendlyName.props.children} was successfully deleted.`,
      variant: 'success',
      dismissAfter: 3000,
    })
    const updatedServices = data.filter((service) => service.id !== serviceObj.id)
    setData(updatedServices)
  }

  const handleDelete = (serviceObj) => {
    if (severity === 'low') {
      deleteService(serviceObj)
    } else if (severity === 'medium') {
      setIsOpen(true)
      setServiceToDelete(serviceObj)
    }

  }

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

      <DeleteTable data={data} handleDelete={handleDelete} />
      <DeleteConfirm service={serviceToDelete} isOpen={isOpen} setIsOpen={setIsOpen} deleteService={deleteService} />
    </>
  );
}
