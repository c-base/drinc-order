import React from 'react';

export default class DrinkList extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    drinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      id      : React.PropTypes.string.isRequired,
      name    : React.PropTypes.string.isRequired,
      min     : React.PropTypes.number.isRequired,
      max     : React.PropTypes.number.isRequired,
      ist     : React.PropTypes.number.isRequired
    }).isRequired).isRequired
  }


  selectDrink(drink) {
    this.props.actions.selectDrink(drink);
    console.log('selected ' + drink.id)
  }
  handleKeys(event) {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      return this.selectDrink();
    }
    const ESC = 27;
    if (event.keyCode === ESC) {
      //return this.handleClear();
    }
  }

  render() {
    console.log(this.props);
    const { drinks, ...other } = this.props;
    return (
      <table className="table table-condensed table-striped table-hover">
        <thead>
          <tr>
            <th>getra:nc</th>
            <th>min</th>
            <th>max</th>
            <th className="istColumn">ist</th>
            <th>order</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink) =>
          <tr onClick={() => this.selectDrink(drink)} key={drink.id}>
            <td>{drink.name}</td>
            <td>{drink.min}</td>
            <td>{drink.max}</td>
            <td>
              <input className="form-control input-sm" ref="ist" value={drink.ist} onKeyDown={(event) => this.handleKeys(event)} />
            </td>
            <td></td>
          </tr>
          )}
        </tbody>
      </table>
    );
  }
}
