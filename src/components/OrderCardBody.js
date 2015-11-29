import React from 'react';

export default class OrderCardBody extends React.Component {
  static propTypes = {
    drinks   : React.PropTypes.array.isRequired
  }

  render () {
    const { drinks } = this.props
    return (
      <div className="panel-body">
        <ul className="list-unstyled">
          {drinks
            .map(drink => {
              return (
                <li key={drink.id}>
                  <span className="label label-success">{drink.max - drink.ist}</span> {drink.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}