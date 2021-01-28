import React from 'react';
import { Table, TBody, Th, THead, Tr, Td } from '@twilio-paste/core/table';
import { Text } from '@twilio-paste/core/text';
import { Button } from '@twilio-paste/core/button';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';
import PropTypes from 'prop-types';

export const DeleteTable = ({ columns, rows, emptyState, handleDelete }) => {
  if (rows.length === 0) {
    return (
      <Text as="span" fontFamily="fontFamilyText">
        {emptyState}
      </Text>
    );
  }

  rows.forEach((row) => {
    if (row.length > columns.length)
      throw new Error(
        'If you are seeing this error, it is because you added more cells than there are columns. Go back to delete.js and add a new column heading. DO NOT try to fix this error in DeleteTable.js!',
      );
  });

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
          if (row.length < columns.length) {
            let diff = columns.length - row.length;
            for (let i = 0; i < diff; i++) {
              row.push(<Text as="span" fontFamily="fontFamilyText"></Text>);
            }
          }
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
  emptyState: PropTypes.string,
};

DeleteTable.defaultProps = {
  columns: [],
  handleDelete: {},
  rows: [[]],
  emptyState: '',
};
