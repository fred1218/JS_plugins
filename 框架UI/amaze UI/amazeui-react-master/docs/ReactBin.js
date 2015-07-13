'use strict';

var React = require('react');
var JSXTransformer = require('react/dist/JSXTransformer');
var CodeMirror = require('codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/runmode/runmode');

var Button = require('../src/Button');
var Close = require('../src/Close');
var Badge = require('../src/Badge');
var Pagination = require('../src/Pagination');
var List = require('../src/List');
var ListItem = require('../src/ListItem');
var Icon = require('../src/Icon');
var Nav = require('../src/Nav');
var NavItem = require('../src/NavItem');
var CollapsibleNav = require('../src/CollapsibleNav');
var Topbar = require('../src/Topbar');
var Breadcrumb = require('../src/Breadcrumb');
var Panel = require('../src/Panel');
var PanelGroup = require('../src/PanelGroup');
var Progress = require('../src/Progress');

// var babel = require('babel-core/browser.js');
var DateTimeInput = require('../src/DateTimeInput');
var DateTimePicker = require('../src/DateTimePicker');

var ButtonGroup = require('../src/ButtonGroup');
var ButtonCheck = require('../src/ButtonCheck');
var ButtonToolbar = require('../src/ButtonToolbar');

var Container = require('../src/Container');
var Grid = require('../src/Grid');
var AvgGrid = require('../src/AvgGrid');
var Col = require('../src/Col');
var Image = require('../src/Image');
var Thumbnail = require('../src/Thumbnail');
var Thumbnails = require('../src/Thumbnails');
var Input = require('../src/Input');
var Form = require('../src/Form');
var FormGroup = require('../src/FormGroup');
var UCheck = require('../src/UCheck');
var Table = require('../src/Table');
var Article = require('../src/Article');
var Alert = require('../src/Alert');
var Dropdown = require('../src/Dropdown');
var Modal = require('../src/Modal');
var ModalTrigger = require('../src/ModalTrigger');
var NProgress = require('../src/NProgress');
var Popover = require('../src/Popover');
var PopoverTrigger = require('../src/PopoverTrigger');
var SmoothScrollMixin = require('../src/mixins/SmoothScrollMixin');
var ScrollSpy = require('../src/ScrollSpy');
var ScrollSpyNav = require('../src/ScrollSpyNav');
var Sticky = require('../src/Sticky');
var Selected = require('../src/Selected');
var Slider = require('../src/Slider');
var Tabs = require('../src/Tabs');

// widgets
var Accordion = require('../src/Accordion');
var Divider = require('../src/Divider');
var Footer = require('../src/Footer');
var GoTop = require('../src/GoTop');
var Gallery = require('../src/Gallery');
var Header = require('../src/Header');
var ListNews = require('../src/ListNews');
var Menu = require('../src/Menu');
var Navbar = require('../src/Navbar');
var Titlebar = require('../src/Titlebar');

var IS_MOBILE = typeof navigator !== 'undefined' && (
    navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );

var CodeExample = React.createClass({
  componentDidMount: function() {
    if (CodeMirror === undefined) {
      return;
    }

    CodeMirror.runMode(
      this.props.code,
      this.props.mode,
      React.findDOMNode(this).children[0]
    );
  },

  render: function() {
    return (
      <pre className="cm-s-default">
        <code>
          {this.props.code}
        </code>
      </pre>
    );
  }
});

var CodeEditor = React.createClass({
  propTypes: {
    readOnly: React.PropTypes.bool,
    code: React.PropTypes.string
  },

  componentDidMount: function() {
    if (IS_MOBILE || CodeMirror === undefined) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(React.findDOMNode(this.refs.editor), {
      mode: 'javascript',
      lineNumbers: false,
      lineWrapping: false,
      matchBrackets: true,
      tabSize: 2,
      readOnly: this.props.readOnly
    });

    this.editor.on('change', this.handleChange);
  },

  componentDidUpdate: function() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.code);
    }
  },

  handleChange: function() {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  },

  render: function() {
    var editor;

    if (IS_MOBILE) {
      editor = (
        <CodeExample mode="javascript" code={this.props.code}/>
      );
    } else {
      editor = <textarea ref='editor' defaultValue={this.props.code} />;
    }

    return (
      <div style={this.props.style} className={this.props.className}>
        {editor}
      </div>
    );
  }
});

var SelfCleaningTimeoutMixin = {
  componentDidUpdate: function() {
    clearTimeout(this.timeoutID);
  },

  setTimeout: function() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  }
};

var ReactBin = React.createClass({
  mixins: [SelfCleaningTimeoutMixin],

  propTypes: {
    code: React.PropTypes.string.isRequired,
    renderCode: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      code: this.props.code
    };
  },

  handleCodeChange: function(val) {
    this.setState({code: val});
    this.executeCode();
  },

  render: function() {
    return (
      <div className='doc-codebin'>
        <div className='doc-example'>
          <div ref='example' />
        </div>
        <CodeEditor
          key='jsx'
          onChange={this.handleCodeChange}
          className='doc-code'
          code={this.state.code}/>
      </div>
    );
  },

  componentDidMount: function() {
    this.executeCode();
  },

  componentWillUpdate: function(nextProps, nextState) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.state.code !== nextState.code) {
      this.executeCode();
    }
  },

  componentWillUnmount: function() {
    var mountNode = React.findDOMNode(this.refs.example);

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }
  },

  executeCode: function() {
    var mountNode = React.findDOMNode(this.refs.example);

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e);
    }

    try {
      var code = JSXTransformer.transform(this.state.code).code;

      if (this.props.renderCode) {
        React.render(<CodeEditor code={code} readOnly={true} />, mountNode);
      } else {
        /* eslint-disable */
        eval(code);
        /* eslint-enable */
      }
    } catch (err) {
      this.setTimeout(function() {
        // console.log(err.toString());
        console.log(err.stack);
      }, 500);
    }
  }
});

module.exports = ReactBin;
