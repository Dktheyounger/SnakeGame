import React, { useEffect, useRef, useState } from 'react';

function SnakeGame() {
  
    //References to needed varaibles to use in functions
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const boardSize = 500;
    const blockSize = 10;
    

    //Create the board/canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = boardSize;
        canvas.height = boardSize;
        canvas.style.width = `${boardSize}px`;
        canvas.style.height = `${boardSize}px`;

        const context = canvas.getContext("2d");

        context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);


        contextRef.current = context;
    }, [])


    //function for when button is pressed needs to be implemented
    function KeyPressed(){
        console.log("Can you hear me father");
        contextRef.current.fillStyle = '#FFFFFF';
        contextRef.current.fillRect(0,0,blockSize,blockSize);

        contextRef.current.fillRect(490,490,blockSize,blockSize);
    }

  return (
     <canvas tabIndex={0} ref={canvasRef} onKeyDown={KeyPressed}>

     </canvas>
  );



}

export default SnakeGame;