var data=[{link:'##',title:'公司',subCols:2,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'人物',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'#c3',title:'趋势',subCols:4,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'投融资',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}];

var handleClick = function(nav, index, e) {
  if (nav && nav.subMenu) {
    // 有二级菜单的链接点击了
  } else {
    e.preventDefault();
    console.log('点击的链接为：', nav);
    // do something
    // this.handleToggle(); // 关闭整个下拉菜单
  }
};

var menuIntance = (
  <div>
    <Header title="Menu Demo" />
    <Menu
      toggleIcon="list"
      data={data}
      theme="dropdown1"
      onSelect={handleClick} />
  </div>
);

React.render(menuIntance, mountNode);
