import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-cyan rounded-full pointer-events-none z-50 shadow-glow-cyan"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-purple/50 bg-brand-purple/10 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 2.2 : 1,
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.8)' : 'rgba(139, 92, 246, 0.4)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </div>
  );
}
