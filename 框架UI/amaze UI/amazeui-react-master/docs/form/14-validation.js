var ValidationExample = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },

  validate: function() {
    var length = this.state.value.length;

    if (length < 10 && length > 4) {
      return 'success';
    } else {
      return 'error';
    }
  },

  handleChange: function() {
    this.setState({
      value: this.refs.field.getValue()
    });
  },

  render: function() {
    return (
      <Input
        value={this.state.value}
        placeholder="输入 5-9 个字符用户名"
        label="表单验证示例"
        validation={this.validate()}
        hasFeedback
        ref="field"
        onChange={this.handleChange} />
    );
  }
});

React.render(<ValidationExample />, mountNode);
