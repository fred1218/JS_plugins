'use strict';

var React = require('react');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;
var StateMixin = require('react-router').State;

var Grid = require('../../src/Grid');
var Col = require('../../src/Col');
var Icon = require('../../src/Icon');

var data = require('./data');
var DocMain = require('./DocMain');
var Banner = require('./DocBanner');

var PageComponents = React.createClass({
  mixins: [StateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      activeIndex: null
    };
  },

  componentDidMount: function() {
    this.activeDefault();
  },

  componentWillUpdate: function(nextProps, nextState) {
    this.activeDefault();
  },

  handleSelect: function(index, e) {
    e && e.preventDefault();

    var oldIndex = this.state.activeIndex;

    this.setState({
      activeIndex: (oldIndex === index) ? -1 : index
    });
  },

  activeDefault: function() {
    var component = this.getParams().component;
    var categoryIndex = null;

    if (component) {
      data.every(function(item, i) {
        if (categoryIndex) {
          return false;
        } else {
          item.components.every(function(cpt, index) {
            if (cpt.id === component) {
              categoryIndex = i;
              return false;
            }
            return true;
          });
          return true;
        }
      });
    }

    if (categoryIndex != null) {
      if (this.state.activeIndex == null) {
        this.handleSelect(categoryIndex);
      }
    }
  },

  renderNavs: function() {
    return (
      <ul className="amr-nav">
        {data.map(function(item, i) {
          var isActive = this.state.activeIndex === i;

          return (
            <li
              className={isActive ? 'am-active' : null}
              key={i}>
              <a
                onClick={this.handleSelect.bind(this, i)}
                href="#">
                {item.title}
                <span className="amr-nav-en">{item.category}</span>
                <Icon icon={isActive ? 'minus-square-o' : 'plus-square-o'} />
              </a>
              <ul>
                {item.components.map(function(component, index) {
                  return (
                    <li key={index}>
                      <Link
                        to="component"
                        params={{component: component.id}}>
                        {component.title}
                        <span className="amr-nav-en">{component.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }.bind(this))}
      </ul>
    );
  },

  render: function() {
    return (
      <DocMain>
        <Banner title="Web 组件">
          基于 React.js 封装的 Web 组件
        </Banner>
        <Grid fixed className="amr-content">
          <Col sm={12} md={9}>
            <RouteHandler />
          </Col>
          <Col sm={12} md={3}>
            {this.renderNavs()}
          </Col>
        </Grid>
      </DocMain>
    );
  }
});

module.exports = PageComponents;
