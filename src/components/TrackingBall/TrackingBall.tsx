import { useEffect, useRef } from 'react';

import useMousePosition from '../../hooks/useMousePosition';

const MouseBall = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, handleCoords] = useMousePosition();

  useEffect(() => {
    if (canvasRef?.current) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;

      requestAnimationFrame(function ball() {
        drawCircle(ctx, {
          radius: 50,
          lineWidth: 3,
          strokeStyle: '#4F7CAC',
          colorFill: '#4F7CAC',
          startY: coords.y,
          startX: coords.x,
        });
      });
    }
  }, [coords.x, coords.y]);
  return (
    <>
      <h1>Tracking ball</h1>
      <canvas
        id="canvas2"
        ref={canvasRef}
        width="400"
        height="350"
        onMouseMove={(e) => {
          handleCoords(e as unknown as MouseEvent);
        }}
        style={{ border: '2px solid black' }}
      ></canvas>
    </>
  );
};

export default MouseBall;
