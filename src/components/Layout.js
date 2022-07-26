import React from 'react';
import CintaContacto from './CintaContacto';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import WhatsApp from './WhatsApp';




function Layout (props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <CintaContacto />
      <Navbar />
      <Main/>
      <Footer/>
      <WhatsApp/>
      {props.children}
    </React.Fragment>
  )
}

export default Layout;
