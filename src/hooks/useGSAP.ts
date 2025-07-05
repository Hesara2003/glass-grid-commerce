
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGSAP = (
  animation: (ref: React.RefObject<HTMLElement>) => void,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      animation(ref);
    }
  }, dependencies);

  return ref;
};

export const useHoverAnimation = (
  element: HTMLElement | null,
  hoverAnimation: gsap.core.Tween,
  leaveAnimation: gsap.core.Tween
) => {
  useEffect(() => {
    if (!element) return;

    const onMouseEnter = () => hoverAnimation.play();
    const onMouseLeave = () => leaveAnimation.play();

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [element, hoverAnimation, leaveAnimation]);
};
