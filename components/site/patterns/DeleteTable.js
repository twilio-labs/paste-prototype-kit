import React from 'react';
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';
import PropTypes from 'prop-types';

export const DeleteTable = ({ data, handleDelete }) => {
  if (data.length === 0) {
    return (
      <Text as="span" fontFamily="fontFamilyText">
        Nothing to delete!
      </Text>
    );
  }

  const cols = Object.keys(data[0]);

  return (
    <Table>
      <THead>
        <Tr>
          {cols.map((key) => {
            if (key === 'id') return <></>;
            return <Th key={cols.indexOf(key)}>{key}</Th>;
          })}
          <Th>Actions</Th>
        </Tr>
      </THead>
      <TBody>
        {data.map((service) => {
          const row = [];
          for (let i = 1; i < cols.length; i++) {
            row.push(<Td key={service.id + i}>{service[cols[i]]}</Td>);
          }
          row.push(
            <Td key={service.id}>
              <Button
                id={service.id}
                size="icon_small"
                variant="destructive_secondary"
                onClick={() => handleDelete(service)}
              >
                <DeleteIcon title="Delete" />
              </Button>
            </Td>,
          );
          return <Tr key={service.id}>{row}</Tr>;
        })}
      </TBody>
    </Table>
  );
};

DeleteTable.propTypes = {
  data: PropTypes.array,
  handleDelete: PropTypes.func,
};

DeleteTable.defaultProps = {
  data: [{}],
  handleDelete: {},
};
