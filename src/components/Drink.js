import React from 'react';

export default class Drink extends React.Component {
  static propTypes = {
    id      : React.PropTypes.string.isRequired,
    name    : React.PropTypes.string.isRequired,
    min     : React.PropTypes.number.isRequired,
    max     : React.PropTypes.number.isRequired,
    onSelectDrink : React.PropTypes.func.isRequired
  }
  // componentWillMount = () => console.log(this);

  handleOnClick = () => this.props.onSelectDrink(this.props.id);

  render() {
    return (
    <tr onClick={this.handleOnClick}>
      <td>{this.props.name}</td>
      <td>{this.props.min}</td>
      <td>{this.props.max}</td>
    </tr>
    );
  }
}
