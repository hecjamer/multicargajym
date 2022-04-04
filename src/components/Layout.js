import React from 'react';
import CintaContacto from './CintaContacto';
import Navbar from './Navbar';


function Layout (props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <CintaContacto />
      <Navbar/>
      {props.children}
    </React.Fragment>
  )
}

export default Layout;
