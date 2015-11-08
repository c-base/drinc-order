import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from '../actions';

const mapStateToProps = (state) => ({
  drinks        : state.drinks
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class MenuView extends React.Component {
  static propTypes = {
    drinks  : React.PropTypes.array,
    actions : React.PropTypes.object
  }

  drinkGroups = {
    NONE: 'NONE',
    SODA: 'SODA',
    BEER: 'BEER',
    TSEC: 'TSEC',
    COFE: 'COFE',
    CIDR: 'CIDR',
    CHOC: 'CHOC',
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedDrink: null
    }
  }

  onClickRow(drink) {
    this.state.selectedDrink = drink;
    this.setState(this.state)
  }

  updateDrink(event) {

    if (event.target.type == 'checkbox') {
      this.state.selectedDrink[event.target.name] = event.target.checked;
    } else {
      this.state.selectedDrink[event.target.name] = event.target.value;
    }

    this.setState(this.state)
    this.props.actions.updateDrink(this.state.selectedDrink);
  }

  updateDrinkIngredient(event) {
    this.state.selectedDrink.ingredients[event.target.name] = event.target.checked;
    this.setState(this.state)
    this.props.actions.updateDrink(this.state.selectedDrink);
  }

  renderDrinkForm() {
    if (this.state.selectedDrink === null) return '';
    const drink = this.state.selectedDrink;
    return (
    <div className="panel panel-success">
      <div className="panel-heading"></div>
      <div className="panel-body">
        <div className="form-group col-md-12">
          <label htmlFor="name" className="">drinc</label>
          <input className="form-control" placeholder="getra:nc" name="name"
                 value={drink.name} onChange={(event)=>this.updateDrink(event)} />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="liter" className="">liter</label>
          <input className="form-control" placeholder="liter" name="liter"
                 value={drink.liter} onChange={(event)=>this.updateDrink(event)} />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="volume" className="">volume</label>
          <input className="form-control" placeholder="volume" name="volume"
                 value={drink.volume}  onChange={(event)=>this.updateDrink(event)} />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="price-crew" className="">crew</label>
          <input className="form-control" placeholder="price-crew" name="priceCrew"
                 value={drink.priceCrew}  onChange={(event)=>this.updateDrink(event)} />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="price-alien" className="">alien</label>
          <input className="form-control" placeholder="price-alien" name="priceAlien"
                 value={drink.priceAlien}  onChange={(event)=>this.updateDrink(event)} />
        </div>
        <div className="form-group col-md-3 checkbox">
          <label htmlFor="inProgram">
            <input name="inProgram" type="checkbox"
                   checked={drink.inProgram} onChange={(event)=>this.updateDrink(event)} />
            im programm
          </label>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="price-alien" className="">group</label>
          <select name="group" className="form-control"
                  value={drink.group}  onChange={(event)=>this.updateDrink(event)} >
            {Object.keys(this.drinkGroups).map((group) => <option value={group}>{this.drinkGroups[group]}</option>)}
          </select>
        </div>
        {Object.keys(drink.ingredients).map((ingredient) =>
            <div className="col-md-3 checkbox">
              <label htmlFor={ingredient}>
                <input name={ingredient} type="checkbox"
                       checked={drink.ingredients[ingredient]}
                       onChange={(event) => this.updateDrinkIngredient(event)} />
                {ingredient}
              </label>
            </div>
        )}
      </div>
      <div className="panel-footer"></div>
    </div>
    );
  }
  onKeyDown(event) {
    //console.log(event.keyCode)
    //const ESC = 27;
    //if (event.keyCode === ESC) {
    //  this.setState({selectedDrink: null})
    //}
    //const ENTER = 13;
    //if (event.keyCode === ENTER) {
    //  const drink = this.state.selectedDrink;
    //  this.setState({selectedDrink: drink});
    //}
  }

  render () {
    const { drinks, actions, ...other } = this.props;
    return (
      <div className="row" onKeyDown={(event) => this.onKeyDown(event)}>
        <div className="col-md-8">
          <div className="page-header">
            <h3>carte <small>menu</small></h3>
          </div>
          {this.renderDrinkForm()}

          {Object.keys(this.drinkGroups).map((group) =>

          <div className="row">
            <div className="col-md-12">
              <table className="table table-condensed table-striped table-hover">
                <thead>
                <tr>
                  <th>{this.drinkGroups[group]}</th>
                  <th className="text-right col-md-2">ltr.</th>
                  <th className="text-right col-md-2">%Vol.</th>
                  <th className="text-right col-md-2">crew</th>
                  <th className="text-right col-md-2">alien</th>
                </tr>
                </thead>
                <tbody>
                {drinks
                  .filter((drink) => drink.inProgram)
                  .filter((drink) => drink.group == group)
                  .map((drink) =>
                    <tr key={drink.id} onClick={() => this.onClickRow(drink)}>
                      <td>{drink.name}</td>
                      <td className="text-right">{drink.liter}</td>
                      <td className="text-right">{drink.volume}</td>
                      <td className="text-right">{drink.priceCrew}</td>
                      <td className="text-right">{drink.priceAlien}</td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView);
