jest.dontMock('../Button.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Button = require('../Button');

describe('Button', function() {
  it('Should output a button', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button>Title</Button>
    );

    expect(React.findDOMNode(instance).nodeName).toEqual('BUTTON');
  });

  it('Should output a component with button classes', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button>Title</Button>
    );

    expect(React.findDOMNode(instance).getAttribute('class')).
      toEqual('am-btn am-btn-default');
  });

  it('Should have type=button by default', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).getAttribute('type')).toEqual('button');
  });

  it('Should show the type if set', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button type="submit">
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).getAttribute('type')).toEqual('submit');
  });

  it('Should output an anchor if set href prop', function() {
    var href = '/react';
    var instance = TestUtils.renderIntoDocument(
      <Button href={href}>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).nodeName).toEqual('A');
    expect(React.findDOMNode(instance).getAttribute('href')).toEqual(href);
  });

  it('Should call onClick callback', function() {
    var called = false;
    var onDone = function() {
      called = true;
    };
    var instance = TestUtils.renderIntoDocument(
      <Button onClick={onDone}>
        Title
      </Button>
    );

    TestUtils.Simulate.click(React.findDOMNode(instance));
    expect(called).toBeTruthy();
  });

  it('Should be disabled', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button disabled>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).disabled).toBeTruthy();
  });

  it('Should be disabled link', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button disabled href='#'>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-disabled\b/)).
      toBeTruthy();
  });

  it('Should have block class', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button block>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-btn-block\b/)).
      toBeTruthy();
  });

  it('Should apply amStyle class', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button amStyle="danger">
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-btn-danger\b/)).
      toBeTruthy();
  });

  it('Should apply amSize class', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button amSize="sm">
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-btn-sm\b/)).
      toBeTruthy();
  });

  it('Should honour additional classes set, adding not overriding',
    function() {
      var instance = TestUtils.renderIntoDocument(
        <Button className="test" amStyle="danger">
          Title
        </Button>
      );

      expect(React.findDOMNode(instance).className.match(/\btest\b/)).
        toBeTruthy();
      expect(React.findDOMNode(instance).className.match(/\bbtn-danger\b/)).
        toBeTruthy();
    });

  it('Should default to amStyle="default"', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button amStyle='default'>
        Title
      </Button>
    );

    expect(instance.props.amStyle).toBe('default');
  });

  it('Should be active', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button active>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-active\b/)).
      toBeTruthy();
  });

  it('Should be round', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button round>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-round\b/)).
      toBeTruthy();
  });

  it('Should be radius', function() {
    var instance = TestUtils.renderIntoDocument(
      <Button radius>
        Title
      </Button>
    );

    expect(React.findDOMNode(instance).className.match(/\bam-radius\b/)).
      toBeTruthy();
  });
});
