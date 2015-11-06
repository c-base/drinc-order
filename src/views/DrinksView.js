import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import DrinkList                from '../components/DrinkList';
import DrinkListExport          from '../components/DrinkListExport';
import DrinkForm                from '../components/DrinkForm';
import actionCreators           from '../actions';

const mapStateToProps = (state) => ({
  drinks        : state.drinks
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class DrinksView extends React.Component {
  static propTypes = {
    drinks  : React.PropTypes.array,
    actions : React.PropTypes.object
  }

  render () {
    const { drinks, actions, ...other } = this.props;
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="page-header">
            <h3>getra:nce <small>soll bestand</small></h3>
          </div>
          <div className="row">
            <div className="col-md-8">
              <DrinkList drinks={drinks} actions={actions} />
            </div>
            <div className="col-md-4">
              <div className="well"><DrinkListExport drinks={drinks} /></div>
              <div className="well"><DrinkForm onAddClick={actions.addDrink} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksView);
