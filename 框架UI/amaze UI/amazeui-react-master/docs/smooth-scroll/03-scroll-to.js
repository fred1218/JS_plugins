var ScrollTo = React.createClass({
  mixins: [SmoothScrollMixin],

  handleClick: function(e) {
    e.preventDefault();
    this.smoothScroll(null, {
      position: this.props.position,
      speed: this.props.speed
    });
  },

  render: function() {
    return (
      <Button
        {...this.props}
        onClick={this.handleClick}>
        {this.props.children}
      </Button>
    );
  }
});

var scrollToInstance = (
  <ButtonToolbar>
    <ScrollTo amStyle="primary">滚动到顶部</ScrollTo>
    <ScrollTo amStyle="secondary" position={100}>滚到距离顶部 100px 的位置</ScrollTo>
  </ButtonToolbar>
);

React.render(scrollToInstance, mountNode);
