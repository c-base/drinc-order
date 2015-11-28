import React             from 'react';
import { drinkGroups }   from '../constants';


export default class DrinkForm extends React.Component {
  static propTypes = {
    updateDrink: React.PropTypes.func.isRequired,
    drink      : React.PropTypes.any
  }

  updateDrink(event) {
    if (event.target.type === 'checkbox') {
      this.props.drink[event.target.name] = event.target.checked;
    } else {
      this.props.drink[event.target.name] = event.target.value;
    }

    this.props.updateDrink(this.props.drink);
  }

  updateDrinkIngredient(event) {
    this.props.drink.ingredients[event.target.name] = event.target.checked;
    this.props.updateDrink(this.props.drink);
  }

  render () {
    const drink = this.props.drink;
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
              {Object.keys(drinkGroups).map((group) => <option value={group}>{drinkGroups[group]}</option>)}
            </select>
          </div>
          <div className="row">
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
          <div className="row">
            <div className="form-group col-md-2">
              <label className="" htmlFor="min">soll: min</label>
              <input type="text" ref="min" className="form-control" placeholder="min" name="min"
                     value={drink.min} onChange={(event)=>this.updateDrink(event)} />
            </div>
            <div className="form-group col-md-2">
              <label className="" htmlFor="max">soll: max</label>
              <input type="text" ref="max" className="form-control" placeholder="max" name="max"
                     value={drink.max} onChange={(event)=>this.updateDrink(event)} />
            </div>
          </div>
        </div>
        <div className="panel-footer"></div>
      </div>
    );
  }
}
