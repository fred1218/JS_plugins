var NProgressExample = React.createClass({
  handleStart: function() {
    this.refs.progress.start();
  },

  handleSet: function() {
    this.refs.progress.set(0.4);
  },

  handleInc: function() {
    this.refs.progress.inc();
  },

  handleDone: function() {
    this.refs.progress.done();
  },

  handleForceDone: function() {
    this.refs.progress.done(true);
  },

  render: function() {
    return (
      <div>
        <NProgress spinner ref="progress" />

        <ButtonToolbar>
          <Button onClick={this.handleStart} amStyle="primary">start()</Button>
          <Button onClick={this.handleSet} amStyle="secondary">set(0.4)</Button>
          <Button onClick={this.handleInc} amStyle="warning">inc()</Button>
          <Button onClick={this.handleDone} amStyle="success">done()</Button>
        </ButtonToolbar>
      </div>
    );
  }
});

React.render(<NProgressExample />, mountNode);
