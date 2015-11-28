import React            from 'react';
import { Link }         from 'react-router';
import { navigation }   from '../constants';

export default class Navigation extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">getra:nce</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              { navigation.map((route, index) => <li key={index}><Link to={route.to}>{route.name}</Link></li>)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
