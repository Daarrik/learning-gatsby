import React from 'react';
import './layout.css';
import NavBar from './navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      { children }
    </div>
  );
}

export default Layout;
