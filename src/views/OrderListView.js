import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import Order                    from '../components/Order';
import actionCreators           from '../actions';


const mapStateToProps = (state) => ({
  orders        : state.orders,
  openOrder     : state.openOrder
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class OrderListView extends React.Component {
  static propTypes = {
    orders     : React.PropTypes.array,
    actions    : React.PropTypes.object,
    openOrder  : React.PropTypes.any,
  }

  render () {
    const { orders, actions, openOrder } = this.props;
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h3>bectellungen <small>orders</small></h3>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Order order={openOrder} isOpen={true} actions={actions} />

              {orders.map((order) =>
                  <Order order={order} isOpen={false} actions={actions} /> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListView);
