import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    const activate = (event) => {
      if (event.target.closest('a, button, input, textarea, .interactive-card')) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', activate);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', activate);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${active ? 'cursor-active' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
