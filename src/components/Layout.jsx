import React from 'react';
import Header from './Header';
import '../styles/components/Layout.scss';

function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
