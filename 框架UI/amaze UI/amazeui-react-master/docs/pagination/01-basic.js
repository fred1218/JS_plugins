var PaginationInstance = (
  <div>
    <Pagination>
      <Pagination.Item disabled href="#">&laquo;</Pagination.Item>
      <Pagination.Item active>1</Pagination.Item>
      <Pagination.Item href="http://www.amazeui.org">2</Pagination.Item>
      <Pagination.Item href="#">3</Pagination.Item>
      <Pagination.Item href="#">4</Pagination.Item>
      <Pagination.Item href="#">5</Pagination.Item>
      <Pagination.Item href="#">&raquo;</Pagination.Item>
    </Pagination>

    <hr />

    <Pagination>
      <Pagination.Item href="#">&laquo; Prev</Pagination.Item>
      <Pagination.Item href="#">Next &raquo;</Pagination.Item>
    </Pagination>
  </div>
);

React.render(PaginationInstance, mountNode);
