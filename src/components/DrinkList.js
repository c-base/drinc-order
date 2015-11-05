import React from 'react';
import Drink from './Drink';

export default class DrinkList extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      id:   React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  render() {
    const { drinks, ...other } = this.props;
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
          {drinks.map((drink) =>
              <Drink {...drink} {...other} key={drink.id} />
          )}
        </tbody>
      </table>
    );
  }
}
