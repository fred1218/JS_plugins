var imgSrc = 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80';

var imageInstance = (
  <p>
    <Image src={imgSrc} width='140' height='140' thumbnail />
    <Image src={imgSrc} width='140' height='140' thumbnail radius />
    <Image src={imgSrc} width='140' height='140' thumbnail circle />
  </p>
);

React.render(imageInstance, mountNode);
