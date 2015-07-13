var data = [{
  title: 'more \u00BB',
  link: '#more'
}];

var imgTitle= <img
  src="http://s.amazeui.org/media/i/brand/amazeui-b.png" />;

var titlebarIntance = (
  <div>
    <h4>文字标题</h4>
    <Titlebar title="栏目标题" nav={data}/>

    <h4>图片标题</h4>
    <Titlebar title={imgTitle} nav={data}/>
  </div>
);

React.render(titlebarIntance, mountNode);
