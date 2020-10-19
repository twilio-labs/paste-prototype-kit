import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Anchor } from '@twilio-paste/core/anchor';

const PrototypeAnchor = (props) => {
  return (
    <Link {...props} passHref>
      <Anchor {...props} />
    </Link>
  );
};

PrototypeAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export { PrototypeAnchor };
