'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var DimmerMixin = require('./mixins/DimmerMixin');
var Events = require('./utils/Events');
var Close = require('./Close');
var Icon = require('./Icon');

var Modal = React.createClass({
  mixins: [ClassNameMixin, DimmerMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading',
      'actions', 'popup']),
    title: React.PropTypes.node,
    confirmText: React.PropTypes.string,
    cancelText: React.PropTypes.string,
    closeIcon: React.PropTypes.bool,
    closeViaDimmer: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'modal',
      closeIcon: true,
      confirmText: '确定',
      cancelText: '取消'
    };
  },

  getInitialState: function() {
    return {
      transitioning: false
    };
  },

  componentDidMount: function() {
    this._documentKeyupListener =
      Events.on(document, 'keyup', this.handleDocumentKeyUp, false);

    this.setDimmerContainer();

    // TODO: 何为添加动画效果的最佳时机？ render 完成以后添加动画 Class？
    this.setState({
      transitioning: true
    });
  },

  componentWillUnmount: function() {
    this._documentKeyupListener.off();
    this.resetDimmerContainer();
  },

  handleDimmerClick: function() {
    if (this.props.closeViaDimmer) {
      this.props.onRequestClose();
    }
  },

  handleBackdropClick: function(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onRequestClose();
  },

  handleDocumentKeyUp: function(e) {
    if (!this.props.keyboard && e.keyCode === 27) {
      this.props.onRequestClose();
    }
  },

  isPopup: function() {
    return this.props.type === 'popup';
  },

  isActions: function() {
    return this.props.type === 'actions';
  },

  // Get input data for prompt modal
  getPromptData: function() {
    var data = [];
    var inputs = React.findDOMNode(this).querySelectorAll('input');

    if (inputs) {
      var i = 0;

      for (; i < inputs.length; i++) {
        data.push(inputs[i].value);
      }
    }

    return (data.length === 0) ? null : ((data.length === 1) ? data[0] : data);
  },

  handleConfirm: function(e) {
    var data = e;

    if (this.props.type === 'prompt') {
      data = this.getPromptData();
    }

    this.props.onConfirm(data);
  },

  renderActions: function() {
    return (
      <div
        style={{display: 'block'}}
        className={classNames(this.props.className,
        this.setClassNamespace('modal-actions'),
        this.setClassNamespace('modal-active'))}>
        {this.props.children}
      </div>
    );
  },

  renderPopup: function() {
    return (
      <div
        style={{display: 'block'}}
        className={classNames(this.props.className,
        this.setClassNamespace('popup'),
        this.setClassNamespace('modal-active'))}>
        <div className={this.setClassNamespace('popup-inner')}>
          <div className={this.setClassNamespace('popup-hd')}>
            {this.props.title ? (
              <h4 className={this.setClassNamespace('popup-title')}>
                {this.props.title}
              </h4>
            ) : null}
            <Close onClick={this.props.onRequestClose} />
          </div>
          <div className={this.setClassNamespace('popup-bd')}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },

  renderHeader: function() {
    var title = this.props.title;
    var closeIcon = this.props.closeIcon && !this.props.type ? (
      <Close
        spin
        onClick={this.props.onRequestClose}/>) : null;

    return (this.props.title || closeIcon) ? (
      <div className={this.prefixClass('hd')}>
        {title ? <h4
          className={this.setClassNamespace('margin-bottom-sm')}>
          {title}
        </h4> : null}
        {closeIcon}
      </div>) : null;
  },

  // Render alert/confirm/prompt buttons
  renderFooter: function() {
    var buttons;
    var btnClass = this.prefixClass('btn');
    var props = this.props;

    switch (this.props.type) {
      case 'alert':
        buttons = (
          <span
            onClick={this.props.onConfirm}
            className={btnClass}>
            {this.props.confirmText}
          </span>);
        break;
      case 'confirm':
      case 'prompt':
        buttons = [props.cancelText, props.confirmText].map(function(text, i) {
          return (
            <span
              key={i}
              onClick={i === 0 ? this.props.onCancel : this.handleConfirm}
              className={btnClass}>
              {text}
            </span>
          );
        }.bind(this));
        break;
      default:
        buttons = null;
    }

    return buttons ? (
      <div className={this.prefixClass('footer')}>
        {buttons}
      </div>
    ) : null;
  },

  render: function() {
    if (this.isActions()) {
      return this.renderDimmer(this.renderActions());
    }

    if (this.isPopup()) {
      return this.renderDimmer(this.renderPopup());
    }

    var classSet = this.getClassSet();
    var props = this.props;
    var footer = this.renderFooter();
    var style = {
        display: 'block',
        width: props.modalWidth,
        height: props.modalHeight,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop
      };

    classSet[this.prefixClass('active')] = this.state.transitioning;

    // .am-modal-no-btn -> refactor this style using `~` selector
    classSet[this.prefixClass('no-btn')] = !footer;
    props.type && (classSet[this.prefixClass(props.type)] = true);

    var modal = (
      <div
        {...props}
        style={style}
        ref="modal"
        title={null}
        className={classNames(classSet, props.className)}>
        <div className={this.prefixClass('dialog')}>
          {this.renderHeader()}
          <div className={this.prefixClass('bd')} ref="modalBody">
            {props.type === 'loading' ?
              (props.children ? props.children : <Icon icon="spinner" spin />) :
              props.children}
          </div>
          {footer}
        </div>
      </div>
    );

    return this.renderDimmer(modal);
  }
});

module.exports = Modal;

// TODO: Modal 动画效果实现
// -> 如何关闭 Loading Modal?
// -> 关闭 Modal 以后窗口滚动会原来滚动条所在位置
