import React from 'react';

export default class OrderList extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    orders: React.PropTypes.arrayOf(React.PropTypes.shape({
      id          : React.PropTypes.string.isRequired,
      dateCreated : React.PropTypes.object.isRequired,
      dateUpdated : React.PropTypes.object.isRequired
    }).isRequired).isRequired,
    openOrder     : React.PropTypes.any.isRequired
  }




  render() {
    const { orders } = this.props;
    return (
      <div></div>
    )
  }
}
