import { Route }     from 'react-router';
import React         from 'react';
import CoreLayout    from 'layouts/CoreLayout';
import HomeView      from 'views/HomeView';
import DrinksView    from 'views/DrinksView';
import OrderListView from 'views/OrderListView';

export default (
  <Route component={CoreLayout}>
    <Route name='home'   path='/'       component={HomeView} />
    <Route name='drincs' path='/drincs' component={DrinksView} />
    <Route name='orders' path='/orders' component={OrderListView} />
  </Route>
);
