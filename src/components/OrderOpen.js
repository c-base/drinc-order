import React from 'react';

export default class OrderOpen extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.array,
    onOpenClick: React.PropTypes.func
  }

  handleClick() {
    this.props.onOpenClick(this.props.drinks)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={() => this.handleClick()}
            className="btn btn-default col-md-12"
            type="button"
            >bestellung</button>
        </div>
      </div>
    );
  }
}
