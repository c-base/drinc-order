import React from 'react';
import Drink from './Drink';

export default class DrinkList extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  handleClick() {

  }

  render() {
    return (
      <table className="table table-condensed table-striped table-hover">
        <thead>
          <tr>
            <th>getra:nc</th>
            <th>min</th>
            <th>max</th>
          </tr>
        </thead>
        <tbody>
          {this.props.drinks.map((drink, index) =>
              <Drink {...drink} key={index} />
          )}
        </tbody>
      </table>
    );
  }
}
