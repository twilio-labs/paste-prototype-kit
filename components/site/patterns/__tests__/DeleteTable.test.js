import React from 'react';
import { render, screen } from '@testing-library/react';

import { DeleteTable } from '../DeleteTable';
import { columns, rows, emptyState } from '../../../../pages/patterns/delete';

test('delete table is created', async () => {
  render(<DeleteTable columns={columns} rows={rows} emptyState={emptyState} />);
  const rowsOnTable = await screen.findAllByTitle('Row');
  expect(rowsOnTable).toHaveLength(rows.length);
});
