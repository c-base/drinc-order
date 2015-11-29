import React from 'react';

export default class OrderCardHeader extends React.Component {
  static propTypes = {
    order   : React.PropTypes.object.isRequired,
    isOpen  : React.PropTypes.bool.isRequired
  }

  render () {
    const { order, isOpen } = this.props
    return (
      <div className="panel-footer">
        { isOpen
          ? <span className="label label-success">status: offen</span>
          : <span className="label label-primary">status: gec_lossen</span> }
        <span className="label label-info">erstellt: {order.dateCreated.toDateString()}</span>&nbsp;
        <span className="label label-info">gea:ndert: {order.dateUpdated.toDateString()}</span>
      </div>
    )
  }
}
