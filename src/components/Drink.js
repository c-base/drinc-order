import React from 'react';

export default class Drink extends React.Component {
  static propTypes = {
    id      : React.PropTypes.string.isRequired,
    name    : React.PropTypes.string.isRequired,
    min     : React.PropTypes.number.isRequired,
    max     : React.PropTypes.number.isRequired
  }
   componentWillMount = () => console.log(this);

  handleOnClick = () => true;

  render() {
    return (
    <tr onClick=''>
      <td>{this.props.name}</td>
      <td>{this.props.min}</td>
      <td>{this.props.max}</td>
    </tr>
    );
  }
}
