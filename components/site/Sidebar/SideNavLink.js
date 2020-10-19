import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SideNavAnchor } from './SideNavAnchor';

const SideNavLink = ({ children, nested, href }) => {
  const { asPath } = useRouter();
  const isCurrent = asPath === href;
  return (
    <Link href={href} passHref>
      <SideNavAnchor isCurrent={isCurrent} nested={nested}>
        {children}
      </SideNavAnchor>
    </Link>
  );
};

SideNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  nested: PropTypes.bool,
};
SideNavLink.defaultProps = {
  nested: false,
};

export { SideNavLink };
