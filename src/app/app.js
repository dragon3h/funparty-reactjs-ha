import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BouncyCastles from '../products/bouncy-castles/components/bouncy-castles/bouncy-castles.component';
import './app.styles.scss';

const app = (props) => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/products" component={BouncyCastles} />
        </Switch>
      </BrowserRouter>
  );
};

export default app;