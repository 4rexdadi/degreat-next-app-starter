// Imports
import React, { useEffect, useRef, FC } from "react";

// Imports Styles
import { Cursor, CursorDot } from "./customCursorStyle";

interface CustomCursorProps {}

const CustomCursor: FC<CustomCursorProps> = ({}) => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    if (!cursor.current) return null;

    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;

    return null;
  };

  const onMouseMoveForDot = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    if (!cursorDot.current) return null;

    cursorDot.current.style.left = `${clientX}px`;
    cursorDot.current.style.top = `${clientY}px`;

    return null;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousemove", onMouseMoveForDot);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousemove", onMouseMoveForDot);
    };
  }, []);

  return (
    <>
      <Cursor ref={cursor} className="cursor"></Cursor>
      <CursorDot ref={cursorDot} className="cursorDot"></CursorDot>
    </>
  );
};

export default CustomCursor;
