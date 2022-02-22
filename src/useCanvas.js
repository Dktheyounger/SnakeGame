import { useRef, useEffect } from 'react'

const useCanvas = draw => {

  const canvasRef = useRef(null);
  let direction = '';

  function downHandler({key}) {


    switch(key){

      case 'a':
        direction = 'left';
        console.log('left');
        break;
      case 'd':
        direction = 'right';
        console.log('right');
        break;
      case 'w':
        direction = 'up';
        console.log('up');
        break;
      case 's':
        direction = 'down';
        console.log('down');
        break;
    }
  }

  
  //use effect is called is called right after component mounts
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    window.addEventListener('keydown', downHandler);
    const render = () => {
      frameCount++
      draw(context, frameCount, direction)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas