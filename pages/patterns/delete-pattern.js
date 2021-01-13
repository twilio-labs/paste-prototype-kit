import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { Flex } from '@twilio-paste/core/flex';
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';
import { FaxCapableIcon } from '@twilio-paste/icons/cjs/FaxCapableIcon';
import { SMSCapableIcon } from '@twilio-paste/icons/cjs/SMSCapableIcon';
import { MMSCapableIcon } from '@twilio-paste/icons/cjs/MMSCapableIcon';
import { VoiceCapableIcon } from '@twilio-paste/icons/cjs/VoiceCapableIcon';

export default function Home() {
    return (
        <>
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
                    <Tr>
                        <Td>
                            <Anchor href="#">+1 334 339 7816</Anchor>
                            <br />
              Tuskegee, AL
                        </Td>
                        <Td>Flex Phone Number</Td>
                        <Td>
                            <Button variant="destructive_link">
                                <DeleteIcon title="Delete" />
                            </Button>
                        </Td>
                    </Tr>
                </TBody>
            </Table>
        </>
    );
}
