'use strict';

/**
 * React version of NProgress
 * https://github.com/rstacruz/nprogress/
 */

var React = require('react');
var ClassNameMixin = require('./mixins/ClassNameMixin');

function clamp(n, min, max) {
  if (n < min) {
    return min;
  }

  if (n > max) {
    return max;
  }

  return n;
}

function toBarPercentage(n) {
  return (-1 + n) * 100;
}

var NProgress = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    minimum: React.PropTypes.number,
    easing: React.PropTypes.string,
    speed: React.PropTypes.number,
    spinner: React.PropTypes.bool,
    trickle: React.PropTypes.bool,
    trickleRate: React.PropTypes.number,
    trickleSpeed: React.PropTypes.number
  },

  getInitialState: function() {
    return {
      status: null
    };
  },

  getDefaultProps: function() {
    return {
      minimum: 0.08,
      easing: 'ease',
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800
    };
  },

  start: function() {
    var _this = this;

    !this.state.status && this.set(0);

    var work = function() {
      setTimeout(function() {
        if (!_this.state.status || _this.state.status === 1) {
          return;
        }

        _this.trickle();
        work();
      }, _this.props.trickleSpeed);
    };

    this.props.trickle && work();
  },

  set: function(n) {
    var _this = this;

    n = clamp(n, this.props.minimum, 1);
    this.setState({
      status: n
    });

    if (n === 1) {
      var progress = React.findDOMNode(this.refs.progress);

      progress.style.opacity = 1;
      progress.style.transition = 'none';
      progress.offsetWidth;

      setTimeout(function() {
        progress.style.opacity = 0;
        progress.style.transition = 'all ' + _this.props.speed + 'ms linear';

        setTimeout(function() {
          _this.reset();
        }, _this.props.speed + 100);
      }, _this.props.speed);
    }
  },

  reset: function() {
    this.setState({
      status: null
    });
  },

  done: function() {
    if (this.state.status) {
      this.inc(0.3 + 0.5 * Math.random());
      this.set(1);
    }
  },

  inc: function(amount) {
    var n = this.state.status;

    if (!n) {
      return this.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return this.set(n);
    }
  },

  trickle: function() {
    if (this.state.status < 1) {
      this.inc(Math.random() * this.props.trickleRate);
    }
  },

  render: function() {
    var props = this.props;
    var percent = (this.state.status === null ? '-100' :
      toBarPercentage(this.state.status));
    var barStyle = {
      transition: 'all ' + props.speed + 'ms ' + props.easing,
      transform: 'translate(' + percent + '%,0)'
    };
    var spinner = props.spinner ? (
      <div className="nprogress-spinner" ref="spinner">
        <div className="nprogress-spinner-icon"></div>
      </div>) : null;

    return this.state.status ? (
      <div id="nprogress" ref="progress">
        <div className="nprogress-bar" ref="bar" style={barStyle}>
          <div className="nprogress-peg"></div>
        </div>
        {spinner}
      </div>
    ) : null;
  }
});

module.exports = NProgress;
