// demo de texturas
const app = new PIXI.Application({
  transparent: true,
  backgroundColor: 0x000f0f,
  width: 640,
  height: 454,
  resolution: window.devicePixelRatio || 1,
  autoResize: true
});
document.body.appendChild(app.view);

app.ticker.add(() => {
  // just for fun, let's rotate mr rabbit a little
  // ship.rotation += 0.015;
});
