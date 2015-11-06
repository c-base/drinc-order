import React from 'react';

export default class OrderCreate extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.array,
    onCreateClick: React.PropTypes.func
  }

  handleClick() {
    this.props.onCreateClick(this.props.drinks)
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
