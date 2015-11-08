import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import OrderOpen                from '../components/OrderOpen';
import Inventory                from '../components/Inventory';
import DrinkListExport          from '../components/DrinkListExport';
import DrinkForm                from '../components/DrinkForm';
import actionCreators           from '../actions';

const mapStateToProps = (state) => ({
  drinks        : state.drinks
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class InventoryView extends React.Component {
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
            <h3>inventar <small>inventory</small></h3>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Inventory drinks={drinks} actions={actions} />
            </div>
            <div className="col-md-4">
              <div className="well"><OrderOpen drinks={drinks} onOpenClick={actions.openOrder} /></div>
              <div className="well"><DrinkListExport drinks={drinks} /></div>
              <div className="well"><DrinkForm onAddClick={actions.addDrink} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryView);
