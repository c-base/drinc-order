import React from 'react';

export default class Navigation extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired
  }


  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">getra:nce bestellung</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className=""><a href="/">home</a></li>
              <li><a href="/drincs">drincs</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
