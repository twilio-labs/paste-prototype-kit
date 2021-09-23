import React from 'react';
import { Heading } from '@twilio-paste/core/heading';
import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { Flex } from '@twilio-paste/core/flex';
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
          Active Numbers <Button variant="primary">Buy a number</Button>
        </Flex>
      </Heading>

      <Table>
        <THead>
          <Tr>
            <Th>Number</Th>
            <Th>Friendly Name</Th>
            <Th colSpan="4">Capabilities</Th>
            <Th>Configuration</Th>
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
              <VoiceCapableIcon title="Voice capable" />
            </Td>
            <Td>&nbsp;</Td>
            <Td>
              <SMSCapableIcon title="SMS capable" />
            </Td>
            <Td>
              <MMSCapableIcon title="MMS capable" />
            </Td>
            <Td>
              <Text as="dl">
                <Box display="flex">
                  <Box as="dt" fontWeight="fontWeightBold" width="100px">
                    Voice
                  </Box>
                  <Text as="dd">
                    <Text color="colorTextWeak" as="span">
                      Studio Workflow:
                    </Text>{' '}
                    <Anchor href="#">Voice IVR</Anchor>
                  </Text>
                </Box>
                <Box display="flex">
                  <Box as="dt" fontWeight="fontWeightBold" width="100px">
                    Messaging
                  </Box>
                  <Text as="dd">
                    <Text color="colorTextWeak">Proxy Service:</Text> <Anchor href="#">Flex Proxy Service</Anchor>
                  </Text>
                </Box>
              </Text>
            </Td>
            <Td>
              <Button variant="destructive_link">
                <DeleteIcon title="Delete" />
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Anchor href="#">+1 415 549 9312</Anchor>
              <br />
              San Francisco, CA
            </Td>
            <Td>Candidate Connector</Td>
            <Td>
              <VoiceCapableIcon title="Voice capable" />
            </Td>
            <Td>
              <FaxCapableIcon title="Fax capable" />
            </Td>
            <Td>
              <SMSCapableIcon title="SMS capable" />
            </Td>
            <Td>
              <MMSCapableIcon title="MMS capable" />
            </Td>
            <Td>
              <Text as="dl">
                <Box display="flex">
                  <Box as="dt" fontWeight="fontWeightBold" width="100px">
                    Voice
                  </Box>
                  <Text as="dd">
                    <Text color="colorTextWeak">Webhook (POST):</Text> https://demo.twilio.com/welcome/voice/
                  </Text>
                </Box>
                <Box display="flex">
                  <Box as="dt" fontWeight="fontWeightBold" width="100px">
                    Messaging
                  </Box>
                  <Text as="dd">
                    <Text color="colorTextWeak">Studio Workflow:</Text>{' '}
                    <Anchor href="#">Candidate Connector Incoming</Anchor>
                  </Text>
                </Box>
              </Text>
            </Td>
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
