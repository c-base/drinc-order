import React                  from 'react';
import TestUtils              from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { InventoryView }      from './InventoryView';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<InventoryView {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<InventoryView {...props} />)
}

describe('(View) Inventory', function () {
  let component, rendered, _props, _spies;

  beforeEach(function () {
    _spies = {};
    _props = {
      drinks: [],
      actions : bindActionCreators({
        addDrink : (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    };

    component = shallowRenderWithProps(_props);
    rendered  = renderWithProps(_props);
  });

  it('(Meta) Should have a test that works with Chai expectations.', function () {
    expect(true).to.be.true;
  });

  it('Should render as a <div>.', function () {
    expect(component.type).to.equal('div');
  });

  it('Should include an <h3> with a headline.', function () {
    const h3 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h3');

    expect(h3).to.exist;
    expect(h3.textContent).to.match(/inventar inventory/);
  });
});
