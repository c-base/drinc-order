import React from 'react';

export default class AddDrink extends React.Component {
  static propTypes = {
    onAddClick: React.PropTypes.func.isRequired
  }

  handleClick() {
    const node = this.refs.name;
    const name = node.value.trim();
    this.props.onAddClick(name);
    node.value = '';
  }

  render () {
    return (
      <div className="input-group">
        <input type="text" ref="name" className="form-control" />
        <span className="input-group-btn">
          <button onClick={() => this.handleClick()} className="btn btn-default" type="button">Add</button>
        </span>
      </div>
    );
  }
}
