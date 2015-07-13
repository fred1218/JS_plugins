'use strict';

var React = require('react');
var cloneElement = React.cloneElement;
var OverlayMixin = require('./mixins/OverlayMixin');
var assign = require('object-assign');
var dom = require('./utils/domUtils');
var createChainedFunction = require('./utils/createChainedFunction');

function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var PopoverTrigger = React.createClass({
  mixins: [OverlayMixin],

  propTypes: {
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.oneOf(['click', 'hover', 'focus']),
      React.PropTypes.arrayOf(
        React.PropTypes.oneOf(['click', 'hover', 'focus'])
      )
    ]),
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    delay: React.PropTypes.number,
    delayOpen: React.PropTypes.number,
    delayClose: React.PropTypes.number,
    defaultPopoverActive: React.PropTypes.bool,
    popover: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      placement: 'right',
      trigger: ['hover', 'focus']
    };
  },

  getInitialState: function() {
    return {
      isPopoverActive: this.props.defaultPopoverActive == null ?
        false : this.props.defaultPopoverActive,
      popoverLeft: null,
      popoverTop: null
    };
  },

  componentDidMount: function() {
    if (this.props.defaultPopoverActive) {
      this.updatePopoverPosition();
    }
  },

  componentWillUnmount: function() {
    clearTimeout(this._hoverDelay);
  },

  open: function() {
    this.setState({
      isPopoverActive: true
    }, function() {
      this.updatePopoverPosition();
    });
  },

  close: function() {
    this.setState({
      isPopoverActive: false
    });
  },

  toggle: function() {
    this.state.isPopoverActive ? this.close() : this.open();
  },

  handleDelayedOpen: function() {
    if (this._hoverDelay != null) {
      clearTimeout(this._hoverDelay);
      this._hoverDelay = null;
      return;
    }

    var delay = this.props.delayOpen != null ?
      this.props.delayOpen : this.props.delay;

    if (!delay) {
      this.open();
      return;
    }

    this._hoverDelay = setTimeout(function() {
      this._hoverDelay = null;
      this.open();
    }.bind(this), delay);
  },

  handleDelayedClose: function() {
    if (this._hoverDelay != null) {
      clearTimeout(this._hoverDelay);
      this._hoverDelay = null;
      return;
    }

    var delay = this.props.delayClose != null ?
      this.props.delayClose : this.props.delay;

    if (!delay) {
      this.close();
      return;
    }

    this._hoverDelay = setTimeout(function() {
      this._hoverDelay = null;
      this.close();
    }.bind(this), delay);
  },

  updatePopoverPosition: function() {
    if (!this.isMounted()) {
      return;
    }

    var position = this.calcPopoverPosition();

    this.setState({
      popoverLeft: position.left,
      popoverTop: position.top
    });
  },

  calcPopoverPosition: function() {
    var childOffset = this.getPosition();
    var popoverNode = this.getOverlayDOMNode();
    var popoverHeight = popoverNode.offsetHeight;
    var popoverWidth = popoverNode.offsetWidth;
    var caretSize = 8;

    switch (this.props.placement) {
      case 'right':
        return {
          top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
          left: childOffset.left + childOffset.width + caretSize
        };
      case 'left':
        return {
          top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
          left: childOffset.left - popoverWidth - caretSize
        };
      case 'top':
        return {
          top: childOffset.top - popoverHeight - caretSize,
          left: childOffset.left + childOffset.width / 2 - popoverWidth / 2
        };
      case 'bottom':
        return {
          top: childOffset.top + childOffset.height + caretSize,
          left: childOffset.left + childOffset.width / 2 - popoverWidth / 2
        };
      default:
        throw new Error('calcPopoverPosition(): No such placement of ['
          + this.props.placement + '] found.');
    }
  },

  getPosition: function() {
    var node = React.findDOMNode(this);
    var container = this.getContainerDOMNode();

    var offset = container.tagName === 'BODY' ?
      dom.offset(node) : dom.position(node, container);

    return assign({}, offset, {
      height: node.offsetHeight,
      width: node.offsetWidth
    });
  },

  // used by Mixin
  renderOverlay: function() {
    if (!this.state.isPopoverActive) {
      return <span />;
    }

    var popover = this.props.popover;

    return cloneElement(
      this.props.popover,
      {
        onRequestHide: this.close,
        placement: this.props.placement,
        positionLeft: this.state.popoverLeft,
        positionTop: this.state.popoverTop,
        amStyle: popover.props.amStyle || this.props.amStyle,
        amSize: popover.props.amSize || this.props.amSize
      }
    );
  },

  render: function() {
    var child = React.Children.only(this.props.children);

    var props = {};

    props.onClick = createChainedFunction(child.props.onClick,
      this.props.onClick);

    if (isOneOf('click', this.props.trigger)) {
      props.onClick = createChainedFunction(this.toggle, props.onClick);
    }

    if (isOneOf('hover', this.props.trigger)) {
      props.onMouseOver = createChainedFunction(this.handleDelayedOpen,
        this.props.onMouseOver);
      props.onMouseOut = createChainedFunction(this.handleDelayedClose,
        this.props.onMouseOut);
    }

    if (isOneOf('focus', this.props.trigger)) {
      props.onFocus = createChainedFunction(this.handleDelayedOpen,
        this.props.onFocus);
      props.onBlur = createChainedFunction(this.handleDelayedClose,
        this.props.onBlur);
    }

    return cloneElement(child, props);
  }
});

module.exports = PopoverTrigger;
