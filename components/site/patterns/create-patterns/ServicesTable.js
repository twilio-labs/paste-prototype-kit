import * as React from 'react';
import { Text } from '@twilio-paste/core/text';
import { Anchor } from '@twilio-paste/core/anchor';
import { Table, THead, TBody, Tr, Th, Td } from '@twilio-paste/core/table';
import PropTypes from 'prop-types';

export const ServicesTable = ({ services, col1, col2, col3 }) => {
  // Empty state handling
  if (services.length === 0) {
    return <Text as="div">No services to display</Text>;
  }

  return (
    <Table tableLayout="fixed" data-cy="create-services-table">
      <THead>
        <Tr>
          <Th>{col1}</Th>
          <Th>{col2}</Th>
          <Th>{col3}</Th>
        </Tr>
      </THead>
      <TBody>
        {services.map((item, index) => {
          return (
            <Tr key={index} data-cy={`${item[col1]}-row`}>
              <Td>
                <Anchor href="#">{item[col1]}</Anchor>
              </Td>
              <Td>
                <Text as="span" fontFamily="fontFamilyCode">
                  {item[col2]}
                </Text>
              </Td>
              <Td>
                <Text as="span">{item[col3]}</Text>
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
  col1: PropTypes.string,
  col2: PropTypes.string,
  col3: PropTypes.string,
};

ServicesTable.defaultProps = {
  services: [],
  col1: '',
  col2: '',
  col3: '',
};
