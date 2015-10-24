import React from 'react';

export default class DrinkForm extends React.Component {
  static propTypes = {
    onAddClick: React.PropTypes.func.isRequired
  }

  handleClick() {
    const name = this.refs.name.value.trim();
    const min  = parseInt(this.refs.min.value.trim(), 10);
    const max  = parseInt(this.refs.max.value.trim(), 10);

    if (!name || !min || !max) {
      return;
    }
    this.props.onAddClick(name, min, max);

    this.refs.name.value = '';
    this.refs.min.value = '';
    this.refs.max.value = '';

    this.refs.name.focus();
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.handleClick();
    }
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <label className="sr-only" htmlFor="name">name</label>
            <input type="text" ref="name" className="form-control" placeholder="getra:nc" onKeyDown={(event) => this.handleEnter(event)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="sr-only" htmlFor="min">min</label>
            <input type="text" ref="min" className="form-control" placeholder="min" onKeyDown={(event) => this.handleEnter(event)}/>
          </div>
          <div className="col-md-6">
            <label className="sr-only" htmlFor="max">max</label>
            <input type="text" ref="max" className="form-control" placeholder="max" onKeyDown={(event) => this.handleEnter(event)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button onClick={() => this.handleClick()} className="btn btn-default col-md-12" type="button">absenden</button>
          </div>
        </div>
      </div>
    );
  }
}
