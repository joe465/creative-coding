const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600,  600]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    let w = 75;
    let h = 75;
    let posX = 100;
    let PosY = 100;
    let gapX = w + 35;
    let gapY = h + 35;

    let posX2 = posX + 10;
    let posY2 = PosY + 10;
    let w2 = w - 20
    let h2 = h - 20;

    let arrayCount = 4;
    
    for(let i = 0; i < arrayCount; i++ ){
      for(let j = 0; j < arrayCount; j++){
        // set line width and line color
        context.lineWidth = 1;
        context.strokeStyle = 'white';

        // begin a path or reset a current path
        context.beginPath();
        context.rect(posX + (gapX * i), PosY + (gapY * j), w, h);
        context.stroke();

        if(Math.random() < 0.5){
          context.lineWidth = 4;
          context.beginPath();
          context.rect(posX2 + (gapX * i), posY2 + (gapY * j), w2, h2);
          context.stroke();
        }
      }
    }
       
  };
};

canvasSketch(sketch, settings);
