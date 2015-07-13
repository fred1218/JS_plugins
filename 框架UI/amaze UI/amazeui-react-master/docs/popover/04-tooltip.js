var LinkTooltip = React.createClass({
  render: function() {
    var tooltip = <Popover amSize="sm">{this.props.tooltip}</Popover>;

    return (
      <PopoverTrigger
        placement="top"
        popover={tooltip}
        delayOpen={300}
        delayClose={150}>
        <a
          href={this.props.href}>
          {this.props.children}
        </a>
      </PopoverTrigger>
    );
  }
});

var tlInstance = (
  <p>
    置身<LinkTooltip tooltip="mountain people mountain sea" href="http://baike.baidu.com/link?url=8z5JIKuhAR-ffyW9pl8f0ahxaAnyZRaZhWoaWfviOk1wdgOIvWyuYQ2TLo8AtnzmWtliphjNhtShtOyOQwcvL">人群</LinkTooltip>中，你只需要被淹没，享受，沉默；<LinkTooltip tooltip="不被了解的怪人" href="http://baike.baidu.com/view/9548143.htm">退到</LinkTooltip>人群后，你只需给予双手，微笑，等候。
  </p>
);

React.render(tlInstance, mountNode);
