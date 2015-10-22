import React from 'react';
import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
