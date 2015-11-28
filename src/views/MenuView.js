import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from '../actions';
import { drinkGroups }          from '../constants';


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

  render () {
    const { drinks } = this.props;
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h3>carte <small>menu</small></h3>
          </div>

          {Object.keys(drinkGroups).map((group) =>

          <div className="row">
            <div className="col-md-12">
              <table className="table table-condensed table-striped table-hover">
                <thead>
                <tr>
                  <th>{drinkGroups[group]}</th>
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
                    <tr key={drink.id}>
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
