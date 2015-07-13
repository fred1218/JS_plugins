var placements = ['Left', 'Top', 'Bottom', 'Right'];
var styles = ['primary', 'secondary', 'success', 'warning'];

var popoverInstance = (
  <ButtonToolbar>
    {
      placements.map(function(placement, i) {
        return (
          <PopoverTrigger
            key={i}
            placement={placement.toLowerCase()}
            popover={<Popover><strong>{placement}</strong> 显示的 Popover</Popover>}>
            <Button amStyle={styles[i]}>{placement} Popover</Button>
          </PopoverTrigger>
        );
      })
    }
  </ButtonToolbar>
);

React.render(popoverInstance, mountNode);
