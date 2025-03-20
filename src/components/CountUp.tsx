'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number | string;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 2000, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  
  // Handle string values like "300+"
  const numericEnd = typeof end === 'string' 
    ? parseInt(end.replace(/[^0-9]/g, '')) 
    : end;
  
  const stringSuffix = typeof end === 'string' 
    ? end.replace(/[0-9]/g, '') 
    : suffix;
  
  useEffect(() => {
    const startTime = performance.now();
    countRef.current = 0;
    
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easeOutQuad(progress);
      
      countRef.current = Math.floor(easeProgress * numericEnd);
      
      if (countRef.current !== timeRef.current) {
        timeRef.current = countRef.current;
        setCount(countRef.current);
      }
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [numericEnd, duration]);
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => t * (2 - t);
  
  return (
    <>
      {count}{stringSuffix}
    </>
  );
};

export default CountUp; 