import React           from 'react';
import OrderCardHeader from '../components/OrderCardHeader';
import OrderCardBody   from '../components/OrderCardBody';
import OrderCardFooter from '../components/OrderCardFooter';


export default class Order extends React.Component {
  static propTypes = {
    order   : React.PropTypes.object,
    isOpen  : React.PropTypes.bool.isRequired,
    actions : React.PropTypes.object
  }

  render () {
    const isOpen = this.props.isOpen
    if (this.props.order === null && isOpen)
      return (<div></div>)
    const headline = this.props.order.id;
    const className = 'panel panel-' + (isOpen ? 'success' : 'default')
    return (
      <div className={className}>
        <OrderCardHeader {...this.props} headline={headline} />
        <OrderCardBody   drinks={this.props.order.drinks} />
        <OrderCardFooter {...this.props} />
      </div>
    )
  }
}