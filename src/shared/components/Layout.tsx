import React from 'react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />

      <div className="max-w-3xl mt-12 m-auto">{children}</div>
    </div>
  );
};

export default Layout;
