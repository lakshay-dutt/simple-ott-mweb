import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
function useScroll(el, setScrollDirectionCustom) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(el.current && el.current.getBoundingClientRect ? el.current.getBoundingClientRect() : {});
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();
  const listener = e => {
    if (!el.current || (el.current && !el.current.getBoundingClientRect)) return;
    setBodyOffset(el.current.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setScrollDirectionCustom(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    el.current.addEventListener("scroll", throttle(listener, 250));
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      el.current.removeEventListener("scroll", throttle(listener, 250));
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
export default useScroll;
