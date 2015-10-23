import React from 'react';

export default class Drink extends React.Component {
  static propTypes = {
    name  : React.PropTypes.string.isRequired,
    min   : React.PropTypes.number.isRequired,
    max   : React.PropTypes.number.isRequired
  }

  render() {
    return (
    <tr>
      <td>{this.props.name}</td>
      <td>{this.props.min}</td>
      <td>{this.props.max}</td>
    </tr>
    );
  }
}
