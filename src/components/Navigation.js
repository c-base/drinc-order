import React    from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      navigation: [
        {route: '/',       name: 'home'},
        {route: '/drincs', name: 'drincs'},
        {route: '/orders', name: 'bectellungen'}
      ]
    };
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
              {this.state.navigation.map((element) => <li><Link to={element.route}>{element.name}</Link></li>)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
