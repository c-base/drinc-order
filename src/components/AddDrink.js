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
        <label className="sr-only" htmlFor="name">Email address</label>
        <input type="text" ref="name" className="form-control" name="name" placeholder="neues getra:nc" />
        <span className="input-group-btn">
          <button onClick={() => this.handleClick()} className="btn btn-default" type="button">anfu:gen</button>
        </span>
      </div>
    );
  }
}
