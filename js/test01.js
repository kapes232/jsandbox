const app = new PIXI.Application({ transparent: true });
document.body.appendChild(app.view);

// fighterspr1.png -> https://millionthvector.blogspot.com/2014/06/new-free-sprite.html
// create a new Sprite from an image path.
const bunny = PIXI.Sprite.from("/assets/fighterspr1.png");
//const bunny = PIXI.Sprite.from("/assets/bunny.png");

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

app.ticker.add(() => {
  // just for fun, let's rotate mr rabbit a little
  bunny.rotation += 0.1;
});
