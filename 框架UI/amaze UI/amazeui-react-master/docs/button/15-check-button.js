var buttonsInstance = (
  <div>
    复选
    <br/>
    <ButtonCheck>
      <Button amStyle="primary" componentTag="label">
        <input type="checkbox" name="doc-js-btn" value="苹果"/> 苹果</Button>
      <Button amStyle="primary" componentTag="label">
        <input type="checkbox" name="doc-js-btn" value="橘子"/> 橘子
      </Button>
      <Button amStyle="primary" componentTag="label">
        <input type="checkbox" name="doc-js-btn" value="香蕉"/> 香蕉
      </Button>
    </ButtonCheck>
    <hr/>
    单选
    <br/>
    <ButtonCheck>
      <Button amStyle="primary" componentTag="label">
        <input type="radio" name="options" value="选项 1" id="option1"/> 选项 1
      </Button>
      <Button amStyle="primary" componentTag="label">
        <input type="radio" name="options" value="选项 2" id="option2"/> 选项 2
      </Button>
      <Button amStyle="primary" componentTag="label">
        <input type="radio" name="options" value="选项 3" id="option3"/> 选项 3
      </Button>
      <Button amStyle="primary" componentTag="label" disabled>
        <input type="radio" name="options" value="选项 4" id="option4"/> 选项 4
      </Button>
    </ButtonCheck>
  </div>
);

React.render(buttonsInstance, mountNode);
