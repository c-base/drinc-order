import React from 'react';

export default class OrderCardHeader extends React.Component {
  static propTypes = {
    headline : React.PropTypes.string.isRequired,
    isOpen   : React.PropTypes.bool.isRequired,
    actions  : React.PropTypes.object.isRequired,
    order    : React.PropTypes.object.isRequired
  }

  onClick () {
    this.props.isOpen
      ? this.props.actions.closeOrder(this.props.order)
      : this.props.actions.reopenOrder(this.props.order)
  }

  render () {
    const { headline, isOpen } = this.props
    return (
      <div className="panel-heading">
        {headline}
        <span className="pull-right">
          <button
            onClick={event => this.onClick()}
            className="btn btn-warning btn-xs text-right"
            type="button" >
            {isOpen
              ? 'fertig'
              : 'noch mal'}</button>
        </span>
      </div>
    )
  }
}