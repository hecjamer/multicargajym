import React from 'react';
import CintaContacto from './CintaContacto';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import WhatsApp from './WhatsApp';
import TelefonoApp from './TelefonoApp';
import {DataProvider} from '../DataContext';

function Layout (props) {
  return (
    <DataProvider>
      <React.Fragment>
        <CintaContacto />
        <Navbar />
        <Main/>
        <Footer/>
        <TelefonoApp/>
        <WhatsApp/>
        {props.children}
      </React.Fragment>
    </DataProvider>
  )
}

export default Layout;
