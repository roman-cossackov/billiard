import { useEffect, useState } from 'react';

const useMousePosition = (
  global = false,
): [{ x: number; y: number }, (event: MouseEvent) => void] => {
  const [mouseCoords, setMouseCoords] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const handleCursorMovement = (event: MouseEvent): void => {
    if (!event.target) return;
    const node = event.target as HTMLElement;
    const rect = node.getBoundingClientRect();
    setMouseCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  useEffect(() => {
    if (global) {
      window.addEventListener('mousemove', handleCursorMovement);

      return () => {
        window.removeEventListener('mousemove', handleCursorMovement);
      };
    }
  }, [global]);

  return [mouseCoords, handleCursorMovement];
};

export default useMousePosition;
