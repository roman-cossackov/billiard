import { useEffect, useRef, useState } from 'react';

import { drawCircle } from '../utils/drawCircle';

const Circle = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [startX, setStartX] = useState<number>(0);
  useEffect(() => {
    if (canvasRef?.current) {
      const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;

      requestAnimationFrame(function ball() {
        drawCircle(ctx, {
          radius: 50,
          lineWidth: 3,
          strokeStyle: '#4F7CAC',
          colorFill: '#4F7CAC',
          startY: 150,
          startX,
        });
        setStartX((prevStartX) => prevStartX + 5);
        ctx?.stroke();
        if (startX > 400) {
          setStartX(0);
        }
      });
    }
  }, [startX]);
  return (
    <>
      <h1>Moving Circle</h1>
      <canvas
        ref={canvasRef}
        width="400"
        height="350"
        style={{ border: '2px solid black' }}
      />
    </>
  );
};

export default Circle;
