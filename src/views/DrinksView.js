import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import DrinkList                from '../components/DrinkList';
import AddDrink                 from '../components/AddDrink';
import { addDrink }             from '../actions';

const actionCreators = {
  addDrink
};

const mapStateToProps = (state) => ({
  drinks : state.drinks
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
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="page-header">
            <h3>getra:nce <small>soll bestand</small></h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <AddDrink onAddClick={this.props.actions.addDrink} />
            </div>
          </div>
          <DrinkList drinks={this.props.drinks} />
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksView);
