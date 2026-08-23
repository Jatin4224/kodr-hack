import { useRef, useEffect } from 'react';

export function useMagnetic(intensity = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = node.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * intensity;
      const y = (e.clientY - (top + height / 2)) * intensity;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseLeave = () => {
      node.style.transform = 'translate3d(0px, 0px, 0)';
    };

    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return ref;
}