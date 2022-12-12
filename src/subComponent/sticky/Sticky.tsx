// Imports
import { ReactNode, useEffect, useRef, FC } from "react";
import { gsap } from "gsap";

import useLayoutEffect from "../../hooks/useLayoutEffect";

interface StickyProps {
  children?: ReactNode;
  repeat: number;
  className: string;
  wrapperClass: string;
  start: string;
  end: string;
  target: string | undefined;
  id?: string;
  enabled: boolean;
  pinType?: "fixed" | "transform" | undefined;
}

const Sticky: FC<StickyProps> = ({
  children,
  wrapperClass,
  className,
  start = "0",
  end = "0",
  target,
  id = "sticky",
  enabled = true,
  pinType = "fixed",
}) => {
  const pinSpacer = useRef<any>(null);
  const trigger = useRef<any>(null);
  const targetRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (!enabled || !pinSpacer.current || !trigger.current) return;
    gsap.set(trigger.current, { clearProps: "all" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        pinType,
        pinSpacing: false,
        pinSpacer: pinSpacer.current,
        trigger: trigger.current,
        scrub: true,
        pin: true,
        start: `top top+=${parseFloat(start)}px`,
        end: () => {
          const targetRefRect = targetRef.current.getBoundingClientRect();
          const triggerRect = trigger.current.getBoundingClientRect();
          return `+=${
            targetRefRect.bottom - triggerRect.bottom + parseFloat(end)
          }`;
        },
        invalidateOnRefresh: true,
      },
    });

    return () => {
      timeline.kill();
    };
  }, [id, start, enabled, end, pinType]);

  useEffect(() => {
    if (target) {
      targetRef.current = document.querySelector(target);
    } else {
      targetRef.current = pinSpacer.current.parentNode;
    }
  }, [target]);

  return (
    <div
      ref={(node) => {
        pinSpacer.current = node;
      }}
      className={wrapperClass}
    >
      <div
        ref={(node) => {
          trigger.current = node;
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
};

export default Sticky;
