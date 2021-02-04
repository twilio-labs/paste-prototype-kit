import React from 'react';
import { render, screen } from '@testing-library/react';

import { SideBar } from '..';

// mock of useRouter
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

// mock of pages.json
const pages = ['home', 'explore-products', 'phone-numbers', 'patterns', 'template-page'];

test('length of pages.json matches length of primary nav links', async () => {
  // error message- TypeError: Cannot destructure property 'asPath' of '(0 , _router.useRouter)(...)' as it is null.
  render(<SideBar />);
  const numLinks = await screen.findAllByRole('listitem');
  expect(numLinks).toHaveLength(pages.length);
});
