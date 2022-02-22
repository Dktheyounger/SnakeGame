import React from "react";
import Canvas from './Canvas'


const Game = props => {

    let x = 0;
    let y = 0;
    let OldPositions = [];

    const draw = (ctx, frameCount, direction) => {


        if(direction === 'left'){
          x -= 1;
        }
        else if(direction === 'right'){
          x += 1;
        }
        else if(direction === 'up'){
          y -= 1;
        }
        else if(direction === 'down'){
          y += 1;
        }


        //set canvas to fit entire screen.
        ctx.canvas.height = window.innerHeight / 2;
        ctx.canvas.width = window.innerWidth / 4;

        //clear canvas so it is empty
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#0000FF'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)


        if(direction !== ''){

          //set fill  color
          ctx.fillStyle = '#00FF00'


          for (const position of OldPositions) {
            ctx.fillRect(position.x,position.y,10,10);
          }

          ctx.fillRect(x,y,10,10);

          OldPositions.push({x,y});

        }



      }
    
      return <Canvas draw={draw} />

}

export default Game;