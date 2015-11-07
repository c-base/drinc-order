import React from 'react';

export default class DrinkList extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    drinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      id      : React.PropTypes.string.isRequired,
      name    : React.PropTypes.string.isRequired,
      min     : React.PropTypes.number.isRequired,
      max     : React.PropTypes.number.isRequired,
      ist     : React.PropTypes.number
    }).isRequired).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {drinks: {}}
    props.drinks.map((element) => this.state.drinks[element.id] = {
      ...element,
      order: this.calculateAmountToOrder(element, element.ist),
      orderStyle: this.contextColorClass(element, element.ist)
    })
  }

  onChangeIstField(event, drink) {
    const ist = parseInt(event.target.value, 10) || null;

    if (ist === this.state.drinks[drink.id].ist) { return }
    this.state.drinks[drink.id].ist = ist;
    this.state.drinks[drink.id].order = this.calculateAmountToOrder(drink, ist);
    this.state.drinks[drink.id].orderStyle = this.contextColorClass(drink, ist);
    this.setState(this.state);
  }

  calculateAmountToOrder(drink, ist) {
    ist = ist || 0
    const order = drink.max - parseInt(ist, 10);
    if (order < 0) return 0;
    return order;
  }
  contextColorClass(drink, ist) {
    ist = ist || 0

    if (ist >= drink.max)  return 'success';
    if (ist <= drink.min)    return 'danger';
    if (ist <= drink.min + (drink.max / 3)) return 'warning';
    return 'success'
  }

  selectDrink(drink) {
    this.props.actions.selectDrink(drink);
  }
  recordIst(drink, ist) {
    this.props.actions.recordIst(drink.id, parseInt(ist, 10));
  }
  handleKeys(event, drink) {
    const ENTER = 13;
    const TAB   = 9;
    if (event.keyCode === ENTER || event.keyCode === TAB) {
      return this.recordIst(drink, event.target.value);
    }
  }

  render() {
    const { drinks } = this.props;
    return (
      <table className="table table-condensed table-striped table-hover">
        <thead>
          <tr>
            <th>getra:nc</th>
            <th>min</th>
            <th>max</th>
            <th className="istColumn">ist</th>
            <th className="text-right">order</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink) =>
          <tr key={drink.id}>
            <td>{drink.name}</td>
            <td className="text-right">{drink.min}</td>
            <td className="text-right">{drink.max}</td>
            <td>
              <input
                className="form-control input-sm istInput"
                ref="ist" value={this.state.drinks[drink.id].ist}
                onKeyDown={(event) => this.handleKeys(event, drink)}
                onChange={(event) => this.onChangeIstField(event, drink)}
                onClick={() => this.selectDrink(drink)} />
            </td>
            <td className={'text-right ' + this.state.drinks[drink.id].orderStyle} >
              {this.state.drinks[drink.id].order}
            </td>
          </tr>
          )}
        </tbody>
      </table>
    );
  }
}
