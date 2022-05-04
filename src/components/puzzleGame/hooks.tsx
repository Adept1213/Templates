import { useCallback, useEffect, useState } from "react";

export function useMovePuzzle(id: string) {
  const topMargin = (document.documentElement.clientHeight - 900) / 2;
  const leftMargin = (document.documentElement.clientWidth - 900) / 2;

  const [x, setX] = useState<number>(Number(id) * 100);
  const [y, setY] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  function mouseDown(ev: MouseEvent) {
    const xz: Element = ev.target as Element;
    if (xz.id === id) {
      setIsMouseDown(true);
    }
  }
  function mouseUp() {
    setIsMouseDown(false);
  }

  const movePuzzle = useCallback((ev: MouseEvent): void => {
    const topPosition = ev.clientY - topMargin;
    const leftPosition = ev.clientX - leftMargin;
    setY(y);
    setX(x);
    if (topPosition < 0) {
      setY(0);
    } else if (topPosition > 800) {
      setY(800);
    } else {
      setY(topPosition);
    }
    if (leftPosition < 50) {
      setX(0);
    } else if (leftPosition > 800) {
      setX(800);
    } else {
      setX(leftPosition - 50);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);
    return () => {
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  useEffect(() => {
    if (isMouseDown) {
      document.addEventListener("mousemove", movePuzzle);
    } else {
      document.removeEventListener("mousemove", movePuzzle);
    }
  }, [isMouseDown]);

  return { x, y };
}
