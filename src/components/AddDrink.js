import React from 'react';

export default class AddDrink extends React.Component {
  static propTypes = {
    onAddClick: React.PropTypes.func.isRequired
  }

  handleClick() {
    const node = this.refs.input;
    const name = node.value.trim();
    this.props.onAddClick(name);
    node.value = '';
  }

  render () {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={() => this.handleClick()}>
          Add
        </button>
      </div>
    );
  }
}
