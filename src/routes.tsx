import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BinaryConversion from './pages/BinaryConversion'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/bin2dec" component={BinaryConversion} />
    </Switch>
  );
};

export default Routes;