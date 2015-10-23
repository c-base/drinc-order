import React from 'react';

export default class DrinkListExport extends React.Component {
  static propTypes = {
    drinks: React.PropTypes.array
  }

  handleClick() {
    var stringified = JSON.stringify(this.props.drinks, null, 2);
    console.log(stringified);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={() => this.handleClick()}
            className="btn btn-default col-md-12"
            type="button"
            >liste exportieren</button>
        </div>
      </div>
    );
  }
}
