var btnSearch = (<Button><Icon icon="search" /></Button>);
var btnGo = <Button>手气不错</Button>;

var formInstance = (
  <Form>
    <Input btnBefore={btnSearch} />
    <Input btnAfter={btnGo} />
  </Form>
);

React.render(formInstance, mountNode);
