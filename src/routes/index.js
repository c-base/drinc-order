import { Route }     from 'react-router';
import React         from 'react';
import CoreLayout    from 'layouts/CoreLayout';
import HomeView      from 'views/HomeView';
import DrinksView    from 'views/DrinksView';
import OrderListView from 'views/OrderListView';

export default (
  <Route component={CoreLayout}>
    <Route name='carte'        path='/'             component={HomeView} />
    <Route name='inventar'     path='/inventar'     component={DrinksView} />
    <Route name='bectellungen' path='/bectellungen' component={OrderListView} />
  </Route>
);
