import React from 'react';
import Drink from './Drink'

export default class DrinkList extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  render() {
    return (
      <ul>
        {this.props.drinks.map((drink, index) =>
          <Drink {...drink}
            key={index} />
      )}</ul>
    );
  }
}
