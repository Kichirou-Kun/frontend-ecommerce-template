import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import clsx from "clsx";
import React, { FC, useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import s from "./Drawer.module.css";

interface DrawerProps {
  onClose: () => void;
  position?: "left" | "right" | string;
}

const Drawer: FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  onClose,
  position = "left",
}) => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  const leftStyles = useSpring({
    from: { x: -200 },
    to: {
      x: 0,
    },
  });
  const rightStyles = useSpring({
    from: { x: 200 },
    to: {
      x: 0,
    },
  });
  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus();
    }

    const contentElement = contentRef.current;

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className={clsx(s.root)}
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.backdrop} onClick={onClose} />

        <animated.section
          style={position === "left" ? leftStyles : rightStyles}
          className={clsx(
            "absolute inset-y-0  flex w-full max-w-full outline-none md:w-auto",
            {
              ["left-0 md:pr-10"]: position === "left",
              ["right-0 md:pl-10"]: position === "right",
            }
          )}
        >
          <div className="h-full w-full md:w-screen md:max-w-md">
            <div className={s.sidebar} ref={contentRef}>
              {children}
            </div>
          </div>
        </animated.section>
      </div>
    </div>
  );
};

export default Drawer;
