import { Route }     from 'react-router';
import React         from 'react';
import CoreLayout    from 'layouts/CoreLayout';
import MenuView      from 'views/MenuView';
import InventoryView from 'views/InventoryView';
import OrderListView from 'views/OrderListView';

export default (
  <Route component={CoreLayout}>
    <Route name='menu'      path='/'             component={MenuView} />
    <Route name='inventory' path='/inventar'     component={InventoryView} />
    <Route name='orders'    path='/bectellungen' component={OrderListView} />
  </Route>
);
