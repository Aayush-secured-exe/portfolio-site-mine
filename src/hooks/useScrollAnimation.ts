import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animationElements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
    animationElements.forEach((el) => observer.observe(el));

    return () => {
      animationElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;