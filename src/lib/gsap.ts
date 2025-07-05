
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize scroll smoother
export const initScrollSmoother = () => {
  if (typeof window !== 'undefined') {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }
};

// Hero animations
export const animateHero = () => {
  const tl = gsap.timeline();
  
  tl.from('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  })
  .from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2
  }, '-=0.4')
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .from('.hero-buttons', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')
  .from('.hero-stats', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1
  }, '-=0.4');

  return tl;
};

// Navbar animation
export const animateNavbar = () => {
  gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.2
  });
};

// Bento grid animations
export const animateBentoGrid = () => {
  gsap.from('.bento-item', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.bento-grid',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Product cards animation
export const animateProductCards = () => {
  gsap.from('.product-card', {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.products-grid',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Section reveal animations
export const animateSection = (selector: string, direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  gsap.from(selector, {
    ...directionMap[direction],
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Grain texture animation
export const animateGrainTexture = () => {
  gsap.to('.grain-texture', {
    opacity: 0.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' }
};

// Magnetic button effect
export const magneticButton = (button: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};
