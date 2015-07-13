'use strict';

var React = require('react');

/**
 * Overlay Mixin
 *
 * @desc `overlay` is something like Popover, Modal, etc.
 * */

module.exports = {
  propTypes: {
    container: React.PropTypes.node
  },

  componentDidMount: function() {
    this._renderOverlay();
  },

  componentDidUpdate: function() {
    this._renderOverlay();
  },

  // Remove Overlay related DOM node
  componentWillUnmount: function() {
    this._unmountOverlay();

    if (this._overlayWrapper) {
      this.getContainerDOMNode().removeChild(this._overlayWrapper);
      this._overlayWrapper = null;
    }
  },

  // Create Overlay wrapper
  _mountOverlayWrapper: function() {
    this._overlayWrapper = document.createElement('div');
    this.getContainerDOMNode().appendChild(this._overlayWrapper);
  },

  // Render Overlay to wrapper
  _renderOverlay: function() {
    if (!this._overlayWrapper) {
      this._mountOverlayWrapper();
    }

    var overlay = this.renderOverlay();

    if (overlay !== null) {
      this._overlayInstance = React.render(overlay, this._overlayWrapper);
    } else {
      // Unmount if the component is null for transitions to null
      this._unmountOverlay();
    }
  },

  // Remove a mounted Overlay from wrapper
  _unmountOverlay: function() {
    React.unmountComponentAtNode(this._overlayWrapper);
    this._overlayInstance = null;
  },

  getOverlayDOMNode: function() {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to' +
        ' have a DOM node.');
    }

    if (this._overlayInstance) {
      return React.findDOMNode(this._overlayInstance);
    }

    return null;
  },

  getContainerDOMNode: function() {
    return React.findDOMNode(this.props.container) || document.body;
  }
};
