import React from 'react';
import { render, screen } from '@testing-library/react';

import { SideBar } from '..';

// mock of pages.json
const pages = {
  home: [],
  'explore-products': [],
  'phone-numbers': ['active-numbers'],
  patterns: ['delete', 'create-standard'],
  'template-page': [],
};

test('length of pages.json matches length of primary nav links', async () => {
  // error message- TypeError: Cannot destructure property 'asPath' of '(0 , _router.useRouter)(...)' as it is null.
  render(<SideBar />);
  const numLinks = await screen.findAllByRole('li');
  expect(numLinks).toHaveLength(pages.length);
});
