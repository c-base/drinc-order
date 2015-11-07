import React from 'react';
import 'styles/core.scss';
import Navigation   from '../components/Navigation';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='container'>
        <Navigation {...this.props} />
        <div className='row'>
          <div className="col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
