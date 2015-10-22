import React from 'react';
import Drink from './Drink';

export default class DrinkList extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">getra:nc</div>
            <div className="col-lg-1">min</div>
            <div className="col-lg-1">max</div>
          </div>
            {this.props.drinks.map((drink, index) =>
                <Drink {...drink} key={index} />
            )}
        </div>
      </div>
    );
  }
}
