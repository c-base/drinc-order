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
      <div>
        <div className="row">
          <div className="col-md-12">
            <label className="sr-only" htmlFor="name">name</label>
            <input type="text" ref="name" className="form-control" placeholder="neues getra:nc" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="sr-only" htmlFor="min">min</label>
            <input type="text" ref="min" className="form-control" placeholder="min" />
          </div>
          <div className="col-md-6">
            <label className="sr-only" htmlFor="max">max</label>
            <input type="text" ref="max" className="form-control" placeholder="max" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button onClick={() => this.handleClick()} className="btn btn-default" type="button">anfu:gen</button>
          </div>
        </div>
      </div>
    );
  }
}
