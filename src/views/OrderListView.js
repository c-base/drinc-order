import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
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
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h3>getra:nce bestellungen <small></small></h3>
          </div>
          <div className="row">
            <div className="col-md-8">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListView);
