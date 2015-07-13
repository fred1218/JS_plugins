var animations = ['fade', 'slide'];
var renderTabs = function(animation) {
  return (
    <Tabs animation={animation}>
      <Tabs.Item eventKey="1" title="恣意">
        置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
      </Tabs.Item>
      <Tabs.Item eventKey="2" title="等候">
        走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
      </Tabs.Item>
      <Tabs.Item eventKey="3" title="流浪">
        我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
      </Tabs.Item>
    </Tabs>
  );
};

var tabsInstance = (
  <div>
    {animations.map(function(animation, index) {
      return (
        <div className="am-margin-bottom" key={index}>
          <h4>动画：<code>{animation}</code></h4>
          {renderTabs(animation)}
        </div>
      );
    })}
  </div>
);

React.render(tabsInstance, mountNode);
