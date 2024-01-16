
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import CustomerServiceForm from './components/CustomerServiceForm';
import CustomerServiceList from './components/CustomerServiceList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={CustomerServiceForm} />
        <Route path="/requests/:category" render={({ match }) => (
          <CustomerServiceList category={match.params.category} />
        )} />
      </Switch>
    </Router>
  );
};

export default App;
