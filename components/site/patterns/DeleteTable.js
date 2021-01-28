import React from 'react';
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';
import PropTypes from 'prop-types';

export const DeleteTable = ({ columns, rows, handleDelete }) => {
  if (rows.length === 0) {
    return (
      <Text as="span" fontFamily="fontFamilyText">
        Nothing to delete!
      </Text>
    );
  }

  return (
    <Table>
      <THead>
        <Tr>
          {columns.map((column) => {
            return <Th key={columns.indexOf(column)}>{column}</Th>;
          })}
          <Th>Actions</Th>
        </Tr>
      </THead>
      <TBody>
        {rows.map((row, index) => {
          return (
            <Tr>
              {row.map((cell) => (
                <Td>{cell}</Td>
              ))}
              <Td key={index}>
                <Button id={index} size="icon_small" variant="destructive_secondary" onClick={() => handleDelete(row)}>
                  <DeleteIcon title="Delete" />
                </Button>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

DeleteTable.propTypes = {
  columns: PropTypes.array,
  handleDelete: PropTypes.func,
  rows: PropTypes.array,
};

DeleteTable.defaultProps = {
  columns: [],
  handleDelete: {},
  rows: [[]],
};
