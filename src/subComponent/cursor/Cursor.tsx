// Imports
import { FC, useCallback, useEffect, useRef, useState } from "react";

// Imports Styles
import { CursorContainer } from "./cursorStyle";
import gsap from "gsap";

interface CursorProps {}

const Cursor: FC<CursorProps> = ({}) => {
  const cursor = useRef<HTMLDivElement>(null);
  const [isGrab, setIsGrab] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const onMouseMove = useCallback(
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: hasMoved ? 0.6 : 0,
        ease: "expo.out",
      });
      setHasMoved(true);
    },
    [hasMoved]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
    };
  }, [hasMoved]);

  useEffect(() => {
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    const onMouseEnter = () => {
      setIsPointer(true);
    };
    const onMouseLeave = () => {
      setIsPointer(false);
    };

    let elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']"
      ),
    ];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  useEffect(() => {
    const onMouseEnter = () => {
      setIsGrab(true);
    };
    const onMouseLeave = () => {
      setIsGrab(false);
    };

    let elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']"
      ),
    ];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  return (
    <CursorContainer
      style={{ opacity: hasMoved ? 1 : 0 }}
      className={"container"}
    >
      <div ref={cursor}>
        <div
          className={`cursor ${isGrab && "grab"}  ${isPointer && "pointer"} `}
        />
      </div>
    </CursorContainer>
  );
};

export default Cursor;
