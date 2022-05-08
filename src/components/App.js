
//**** Se cobija con la etiqueta Layout importando el Componente Layout.js **************
//**** Se adiciona el Route NotFound importando la pagina NotFound.js

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Badges from '../pages/Badges';

import NotFound from '../pages/NotFound';

function App() {
  return (

      <BrowserRouter>
        <Layout>
          <Switch>
            {/* <Route exact path="/Badges" component={Badges} />
            <Route component={NotFound} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
  )
}

export default App;
