import React, { useRef } from "react";
import useCanvas from './useCanvas'
import './Canvas.css'

const Canvas = props => {


    const { draw, ...rest } = props

    //The variable that references the canvas its defult is the draw method
    const canvasRef = useCanvas(draw)

    //returns canvas where the canvas ref is the above variable
    return <canvas ref={canvasRef} {...rest}/>

}

export default Canvas;