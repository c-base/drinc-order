import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from '../actions';
import { drinkGroups }          from '../constants';
import DrinkForm                from '../components/DrinkForm';
import DrinkListExport          from '../components/DrinkListExport';

const mapStateToProps = (state) => ({
  drinks        : state.drinks,
  selectedDrink : state.selectedDrink
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class ManageView extends React.Component {
  static propTypes = {
    drinks        : React.PropTypes.array,
    actions       : React.PropTypes.object,
    selectedDrink : React.PropTypes
  }

  onClickRow(drink) {
    this.props.actions.selectDrink(drink);
  }

  onKeyDown(event) {
    const ESC = 27
    if (event.keyCode === ESC) {
      this.props.actions.unselectDrink()
    }
    const ENTER = 13
    if (event.keyCode === ENTER) {
      this.props.actions.unselectDrink()
    }
  }

  rowClass(drink) {
    if (!drink.inProgram) {
      return 'danger'
    }
    return ''
  }

  render () {
    const { drinks, selectedDrink } = this.props;
    return (
      <div className="row" onKeyDown={(event) => this.onKeyDown(event)}>
        <div className="col-md-8">
          <div className="page-header">
            <h3>verwaltunc <small>manage</small></h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="well"><DrinkListExport drinks={drinks} /></div>
            </div>
          </div>

          { (selectedDrink !== null)
            ? <DrinkForm drink={selectedDrink} updateDrink={this.props.actions.updateDrink} />
            : ''
          }

          {Object.keys(drinkGroups).map((group) =>

            <div className="row">
              <div className="col-md-12">
                <table className="table table-condensed table-striped table-hover">
                  <thead>
                  <tr>
                    <th className="col-md-3">{drinkGroups[group]}</th>
                    <th className="text-right">ltr.</th>
                    <th className="text-right">%Vol.</th>
                    <th className="text-right">crew</th>
                    <th className="text-right">alien</th>
                    <th className="text-right">soll:min</th>
                    <th className="text-right">soll:max</th>
                  </tr>
                  </thead>
                  <tbody>
                  {drinks
                    .filter((drink) => drink.group == group)
                    .map((drink) =>
                      <tr key={drink.id} onClick={() => this.onClickRow(drink)} className={this.rowClass(drink)}>
                        <td>{drink.name}</td>
                        <td className="text-right">{drink.liter}</td>
                        <td className="text-right">{drink.volume}</td>
                        <td className="text-right">{drink.priceCrew}</td>
                        <td className="text-right">{drink.priceAlien}</td>
                        <td className="text-right">{drink.min}</td>
                        <td className="text-right">{drink.max}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageView);
