import React from 'react';
import CintaContacto from './CintaContacto';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import WhatsApp from './WhatsApp';
import {DataProvider} from '../DataContext';




function Layout (props) {
  // const children = props.children;
  return (
    <DataProvider>
      <React.Fragment>
        <CintaContacto />
        <Navbar />
        <Main/>
        <Footer/>
        <WhatsApp/>
        {props.children}
      </React.Fragment>
    </DataProvider>
  )
}

export default Layout;
