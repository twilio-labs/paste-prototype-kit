import * as React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const NavContext = React.createContext({});

const NavProvider = ({ children }) => {
  const { data, error } = useSWR('/api/navigation', fetcher);
  const contextValue = {
    nav: data,
    isLoading: !error && !data,
    isError: error,
  };
  return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>;
};
NavProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { NavProvider };
