var formInstance = (
  <form className="am-form" target="_blank">
    <fieldset disabled>
      <Input label="禁用的文本框"/>
      <Input type="select" label="禁止选择">
        <option value="a">禁止选择</option>
      </Input>
      <Input type="submit" value="提交"/>
    </fieldset>
  </form>
);

React.render(formInstance, mountNode);
