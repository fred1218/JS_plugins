var bullshit = '生命是一团欲望，欲望不满足便痛苦，满足便无聊。人生就在痛苦和无聊之间摇摆。——叔本华';
var cols = {
  sm: 12,
  md: 4,
  lg: 3
};

var scrollSpyInstance = (
  <div>
    <Grid>
      <Col {...cols}>
        <ScrollSpy>
          <Panel amStyle="primary" header="Fade">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>


    <Grid>
      <Col {...cols} mdOffset={4} lgOffset={3}>
        <ScrollSpy repeat animation="scale-up">
          <Panel amStyle="secondary" header="scale-up">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>

    <Grid>
      <Col {...cols} mdOffset={8} lgOffset={6}>
        <ScrollSpy repeat animation="scale-down">
          <Panel amStyle="success" header="scale-down">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>

    <Grid>
      <Col {...cols} mdOffset={8} lgOffset={9}>
        <ScrollSpy repeat animation="slide-top">
          <Panel amStyle="warning" header="slide-top">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>

    <Grid>
      <Col {...cols} mdOffset={8} lgOffset={6}>
        <ScrollSpy repeat animation="slide-bottom">
          <Panel amStyle="danger" header="slide-bottom">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>

    <Grid>
      <Col {...cols} mdOffset={4} lgOffset={3}>
        <ScrollSpy repeat animation="slide-right">
          <Panel amStyle="secondary" header="slide-right">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>

    <Grid>
      <Col {...cols}>
        <ScrollSpy repeat animation="slide-left">
          <Panel amStyle="primary" header="slide-left">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>

    <Grid>
      <Col {...cols}>
        <ScrollSpy repeat animation="fade">
          <Panel amStyle="primary" header="fade">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>

      <Col {...cols}>
        <ScrollSpy repeat animation="fade" delay={300}>
          <Panel amStyle="secondary" header="fade">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>

      <Col {...cols}>
        <ScrollSpy repeat animation="fade" delay={600}>
          <Panel amStyle="success" header="fade">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>

      <Col {...cols}>
        <ScrollSpy repeat animation="fade" delay={900}>
          <Panel amStyle="warning" header="fade">
            {bullshit}
          </Panel>
        </ScrollSpy>
      </Col>
    </Grid>
  </div>
);

React.render(scrollSpyInstance, mountNode);
