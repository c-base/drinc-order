import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import OrderList                from '../components/OrderList';
import actionCreators           from '../actions';


const mapStateToProps = (state) => ({
  orders        : state.orders
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class OrderListView extends React.Component {
  static propTypes = {
    orders  : React.PropTypes.array,
    actions : React.PropTypes.object
  }

  render () {
    const { orders, actions, ...other } = this.props;
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h3>bectellungen <small></small></h3>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OrderList orders={orders} actions={actions} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListView);
