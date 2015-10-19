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
      <div className='container text-center'>
        <h1>Getränce</h1>
        <AddDrink onAddClick={this.props.actions.addDrink} />
        <DrinkList drinks={this.props.drinks} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksView);
