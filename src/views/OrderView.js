import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from '../actions';


const mapStateToProps = (state) => ({
  drinks        : state.drinks,
  orders        : state.orders
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class OrderView extends React.Component {
  static propTypes = {
    drinks  : React.PropTypes.array,
    orders  : React.PropTypes.array,
    actions : React.PropTypes.object
  }

  handleClick() {
    console.log(this.props.orders);
    this.props.actions.addOrder(this.props.drinks, this.props.orders);
    console.log(this.props.orders);
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);
