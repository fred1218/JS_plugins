var paginationInstance = (
  <Pagination centered>
    <Pagination.Item disabled href="#">&laquo;</Pagination.Item>
    <Pagination.Item active>1</Pagination.Item>
    <Pagination.Item href="#">2</Pagination.Item>
    <Pagination.Item href="#">3</Pagination.Item>
    <Pagination.Item href="#">4</Pagination.Item>
    <Pagination.Item href="#">5</Pagination.Item>
    <Pagination.Item href="#">&raquo;</Pagination.Item>
  </Pagination>
);

React.render(paginationInstance, mountNode);
