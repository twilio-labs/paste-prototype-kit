import * as React from 'react';
import { Text } from '@twilio-paste/core/text';
import { Anchor } from '@twilio-paste/core/anchor';
import { Table, THead, TBody, Tr, Th, Td } from '@twilio-paste/core/table';
import PropTypes from 'prop-types';

export const ServicesTable = ({ services }) => {
  // Empty state handling
  if (services.length === 0) {
    return <Text as="div">No services to display</Text>;
  }

  return (
    <Table tableLayout="fixed" data-cy="create-services-table">
      <THead>
        <Tr>
          <Th>Friendly Name</Th>
          <Th>SID</Th>
          <Th>Date Created</Th>
        </Tr>
      </THead>
      <TBody>
        {services.map(({ name, sid, created }, index) => {
          return (
            <Tr key={index} data-cy={`${name}-row`}>
              <Td>
                <Anchor href="#">{name}</Anchor>
              </Td>
              <Td>
                <Text as="span" fontFamily="fontFamilyCode">
                  {sid}
                </Text>
              </Td>
              <Td>
                <Text as="span">{created}</Text>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

// These ensure that the props passed from the parent component are present and/or correctly typed
ServicesTable.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

ServicesTable.defaultProps = {
  services: [],
};
