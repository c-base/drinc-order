import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import DrinkList                from '../components/DrinkList'
import AddDrink                 from '../components/AddDrink'
import { ADD_DRINK, addDrink }  from '../actions'

const actionCreators = {
  addDrink : () => ({ type : ADD_DRINK })
};

const mapStateToProps = (state) => ({
  drinks : state.drinks
});
const mapDispatchToProps = (dispatch) => ({
   actions : bindActionCreators(actionCreators, dispatch)
});
export class DrinksView extends React.Component {
  static propTypes = {
    drinks  : React.PropTypes.array
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Getränce</h1>
        <AddDrink
          onAddClick={name =>
            dispatch(addDrink(name))
          } />
        <DrinkList drinks={this.props.drinks} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksView);
