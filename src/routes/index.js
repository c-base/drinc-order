import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView';
import DrinksView  from 'views/DrinksView';
import OrderView   from 'views/OrderView';

export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={HomeView} />
    <Route name='listDrincs'  path='/drincs' component={DrinksView} />
    <Route name='createOrder' path='/order'  component={OrderView} />
  </Route>
);
