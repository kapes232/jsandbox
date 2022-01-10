// ejemplo básico de sprite (de la documentación original)
const app = new PIXI.Application({
  transparent: true,
  backgroundColor: 0x00000f,
  width: 640,
  height: 454,
  resolution: window.devicePixelRatio || 1,
  autoResize: true
});
document.body.appendChild(app.view);

// fighterspr1.png -> https://millionthvector.blogspot.com/2014/06/new-free-sprite.html
// create a new Sprite from an image path.
const ship = PIXI.Sprite.from("/assets/fighterspr1.png");

// escalado del sprite al 30% del tamaño original proporcional al viewport
ship.width = ship.width * app.screen.width * 0.25;
ship.height = ship.height * app.screen.height * 0.25;

// center the sprite's anchor point
ship.anchor.set(0.5);

// move the sprite to the center of the screen
ship.x = app.screen.width / 2;
ship.y = app.screen.height / 2;

app.stage.addChild(ship);

app.ticker.add(() => {
  // just for fun, let's rotate mr rabbit a little
  ship.rotation += 0.015;
});
