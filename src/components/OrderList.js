import React from 'react';

export default class OrderList extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    orders: React.PropTypes.arrayOf(React.PropTypes.shape({
      id          : React.PropTypes.string.isRequired,
      dateCreated : React.PropTypes.object.isRequired,
      dateUpdated : React.PropTypes.object.isRequired
    }).isRequired).isRequired
  }

  renderDrinks(drinks) {
    return (
      <div><ul className="list-unstyled">
        {drinks
          .map((drink) => {
            return (
              <li key={drink.id}>
                <span className="label label-success">{drink.max - drink.ist}</span> {drink.name}
              </li>
            )
          })
        }
      </ul></div>
    );
  }

  renderOrderState(order) {
    if (order.state === 'open') return <span className="label label-success">status: offen</span>;
    return (
      <span className="label label-primary">status: gec_lossen</span>
    )
  }

  renderStateButton(order) {
    if (order.state !== 'open') {
      return (
        <button
          onClick={() => this.props.actions.reopenOrder(order)}
          className="btn btn-warning btn-xs text-right"
          type="button" >noch mal</button>
      );
    }
    return (
      <button
        onClick={() => this.props.actions.closeOrder(order)}
        className="btn btn-warning btn-xs text-right"
        type="button" >fertig</button>
    )
  }

  renderStateColor(order) {
    return (order.state === 'open') ? 'success' : 'default'
  }

  renderOrder(order) {
    return (
      <div className={'panel panel-' + this.renderStateColor(order)} key={order.id}>
        <div className="panel-heading">
          {order.id}
          <span className="pull-right">{this.renderStateButton(order)}</span>
        </div>
        <div className="panel-body">
          {this.renderDrinks(order.drinks)}
        </div>
        <div className="panel-footer">
          {this.renderOrderState(order)}
          <span className="label label-info">erstellt: {order.dateCreated.toDateString()}</span>&nbsp;
          <span className="label label-info">gea:ndert: {order.dateUpdated.toDateString()}</span>
          <div></div>
        </div>
      </div>
    )
  }

  render() {
    const { orders } = this.props;
    return (
      <div>
        {orders
          .filter((order) => order.state === 'open')
          .map((order) => this.renderOrder(order))}
        {orders
          .filter((order) => order.state !== 'open')
          .map((order) => this.renderOrder(order))}
      </div>
    )
  }
}
