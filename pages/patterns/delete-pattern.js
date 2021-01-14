import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { Flex } from '@twilio-paste/core/flex';
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { useToaster, Toaster } from "@twilio-paste/core/toast";
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';
import { FaxCapableIcon } from '@twilio-paste/icons/cjs/FaxCapableIcon';
import { SMSCapableIcon } from '@twilio-paste/icons/cjs/SMSCapableIcon';
import { MMSCapableIcon } from '@twilio-paste/icons/cjs/MMSCapableIcon';
import { VoiceCapableIcon } from '@twilio-paste/icons/cjs/VoiceCapableIcon';

export default function Home() {

    const [data, setData] = React.useState([
        {
            id: 1,
            friendlyName: 'first service',
            sid: 4392908903
        },
        {
            id: 2,
            friendlyName: 'second service',
            sid: 8439025738
        }
    ])

    const toaster = useToaster();

    // React.useEffect(() => {
    //     const deleteButtons = document.getElementsByClassName('delete')
    //     if (deleteButtons.length > 0) {
    //         deleteButtons.forEach(button => {
    //             button.addEventListener('click', () => {
    //                 console.log('button clicked!')
    //             })
    //         })
    //     }
    // })

    const handleDelete = (evt) => {
        toaster.push({
            message: 'Service was successfully deleted.',
            variant: 'success',
            dismissAfter: 3000
        })
        console.log('event:', evt.target)
    }

    return (
        <>
            <Toaster {...toaster} />
            <Heading as="h1" variant="heading10">
                <Flex hAlignContent="between" vAlignContent="center">
                    Services
                </Flex>
                <Paragraph>
                    Services enable you to organize and identify your conversations by
                    use case, or manage them in multiple environments (e.g. dev, stage,
                    prod). This information held within a service is siloed, protecting
                    both your recepients' data.
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
                    {data.map(service => {
                        return (
                            <Tr key={service.id}>
                                <Td>
                                    <Text>
                                        {service.friendlyName}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text as="span" fontFamily="fontFamilyCode">
                                        {service.sid}
                                    </Text>
                                </Td>
                                <Td>
                                    <Button id={service.id} className="delete" variant="destructive_link" onClick={(evt) => handleDelete(evt)}>
                                        <DeleteIcon title="Delete" />
                                    </Button>
                                </Td>
                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
        </>
    );
}
