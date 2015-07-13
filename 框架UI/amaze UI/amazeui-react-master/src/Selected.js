'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Dropdown = require('./Dropdown');
var Icon = require('./Icon');
var Input = require('./Input');

var Selected = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    searchBox: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    optionFilter: React.PropTypes.func,
    dropup: React.PropTypes.bool,
    btnWidth: React.PropTypes.number,
    btnStyle: React.PropTypes.string,
    maxHeight: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'selected',
      placeholder: '点击选择...',
      onChange: function() {},
      optionFilter: function(filterText, option) {
        return (option.label.toLowerCase().indexOf(filterText) > -1);
      }
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value,
      dropdownWidth: null,
      filterText: null
    };
  },

  componentDidMount: function() {
    this.setDropdownWidth();
  },

  setDropdownWidth: function() {
    if (this.isMounted) {
      var toggleButton = React.findDOMNode(this.refs.dropdown.
        refs.dropdownToggle);

      toggleButton && this.setState({dropdownWidth: toggleButton.offsetWidth});
    }
  },

  getValueArray: function() {
    return this.state.value ? this.state.value.split(',') : [];
  },

  hasValue: function(value) {
    return this.getValueArray().indexOf(value) > -1;
  },

  setValue: function(value, callback) {
    this.setState({
      value: value
    }, function() {
      this.props.onChange(value);
      callback && callback();
    });
  },

  handleCheck: function(option, e) {
    e.preventDefault();

    var clickedValue = option.value;

    // multiple select
    if (this.props.multiple) {
      var values = this.getValueArray();

      if (this.hasValue(clickedValue)) {
        values.splice(values.indexOf(clickedValue), 1);
      } else {
        values.push(clickedValue);
      }

      this.setValue(values.join(','));
    } else {
      this.setValue(clickedValue);
      this.refs.dropdown.setDropdownState(false);
    }
  },

  handleUserInput: function(e) {
    e.preventDefault();

    this.setState({
      filterText: React.findDOMNode(this.refs.filterInput).value
    });
  },

  // clear filter
  clearFilterInput: function() {
    if (this.props.multiple && this.props.searchBox) {
      this.setState({
        filterText: null
      });
      React.findDOMNode(this.refs.filterInput).value = null;
    }
  },

  // API for getting component value
  getValue: function() {
    return this.state.value;
  },

  render: function() {
    var classSet = this.getClassSet();
    var selectedLabel = [];
    var items = [];
    var filterText = this.state.filterText;
    var groupHeader;

    this.props.data.forEach(function(option, i) {
      var checked = this.hasValue(option.value);
      var checkedClass = checked ? this.setClassNamespace('checked') : null;
      var checkedIcon = checked ? <Icon icon="check"/> : null;

      checked && selectedLabel.push(option.label);

      // add group header
      if (option.group && groupHeader !== option.group) {
        groupHeader = option.group;
        items.push(
          <li
            className={this.prefixClass('list-header')}
            key={'header' + i}>
            {groupHeader}
          </li>
        );
      }

      if (filterText && !this.props.optionFilter(filterText, option)) {
        return;
      }

      items.push(
        <li
          className={checkedClass}
          onClick={this.handleCheck.bind(this, option)}
          key={i}>
          <span className={this.prefixClass('text')}>
            {option.label}
          </span>
          {checkedIcon}
        </li>
      );
    }.bind(this));

    var status = (
      <span
        className={classNames(this.prefixClass('status'),
      this.setClassNamespace('fl'))}>
        {selectedLabel.length ? selectedLabel.join(', ') : (
          <span className={this.prefixClass('placeholder ')}>
            {this.props.placeholder}
          </span>)}
      </span>
    );
    var optionsStyle = {};

    if (this.props.maxHeight) {
      optionsStyle = {
        maxHeight: this.props.maxHeight,
        overflowY: 'scroll'
      };
    }

    return (
      <Dropdown
        className={classNames(this.props.className, classSet)}
        title={status}
        onClose={this.clearFilterInput}
        btnStyle={this.props.btnStyle}
        btnInlineStyle={{width: this.props.btnWidth}}
        contentInlineStyle={{minWidth: this.state.dropdownWidth}}
        toggleClassName={this.prefixClass('btn')}
        caretClassName={this.prefixClass('icon')}
        contentClassName={this.prefixClass('content')}
        contentTag="div"
        dropup={this.props.dropup}
        ref="dropdown">
        {this.props.searchBox ? (
          <div className={this.prefixClass('search')}>
            <Input
              onChange={this.handleUserInput}
              autoComplete="off"
              standalone
              ref="filterInput" />
          </div>) : null}
        <ul
          style={optionsStyle}
          className={this.prefixClass('list')}>
          {items}
        </ul>
        <input
          name={this.props.name}
          type="hidden"
          ref="selectedField"
          value={this.state.value} />
      </Dropdown>
    );
  }
});

module.exports = Selected;
