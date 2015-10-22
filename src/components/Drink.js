import React from 'react';

export default class Drink extends React.Component {
  static propTypes = {
    name  : React.PropTypes.string.isRequired,
    min   : React.PropTypes.number.isRequired,
    max   : React.PropTypes.number.isRequired
  }

  render() {
    return (
    <div className="row">
      <div className="col-lg-4">{this.props.name}</div>
      <div className="col-lg-4">{this.props.min}</div>
      <div className="col-lg-4">{this.props.max}</div>
    </div>
    );
  }
}
