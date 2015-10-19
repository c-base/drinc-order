import React                  from 'react';
import TestUtils              from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { DrinksView }            from './DrinksView';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<DrinksView {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<DrinksView {...props} />)
}

describe('(View) Drinks', function () {
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

  it('Should include an <h1> with a headline.', function () {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h1');

    expect(h1).to.exist;
    expect(h1.textContent).to.match(/Getränce/);
  });

  it('Should render an input field.', function () {
    const input = TestUtils.findRenderedDOMComponentWithTag(rendered, 'input');

    expect(input).to.exist;
  });

  it('Should render an "Add" button.', function () {
    const btn = TestUtils.findRenderedDOMComponentWithTag(rendered, 'button');

    expect(btn).to.exist;
    expect(btn.textContent).to.match(/Add/);
  });

  it('Should dispatch an action when "Add" button is clicked.', function () {
    const btn = TestUtils.findRenderedDOMComponentWithTag(rendered, 'button');

    _spies.dispatch.should.have.not.been.called;
    TestUtils.Simulate.click(btn);
    _spies.dispatch.should.have.been.called;
  });
});
