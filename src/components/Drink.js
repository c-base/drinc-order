import React from 'react';

export default class Drink extends React.Component {
  static propTypes = {
    name  : React.PropTypes.string.isRequired
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}
