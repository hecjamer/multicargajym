import React from 'react';
import CintaContacto from './CintaContacto';
import Navbar from './Navbar';
import Main from './Main';


function Layout (props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <CintaContacto />
      <Navbar />
      <Main/>

      {props.children}
    </React.Fragment>
  )
}

export default Layout;
