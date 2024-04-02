import { useEffect, useRef } from 'react';

import styles from './Canvas.module.css';

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context?.beginPath();
      context?.arc(100, 100, 50, 0, 2 * Math.PI);
      context?.fill();
    }
  }, []);

  return (
    <canvas className={styles.canvas} ref={canvasRef} width={width} height={height} />
  );
};

export default Canvas;
