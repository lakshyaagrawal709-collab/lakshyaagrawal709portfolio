import { useEffect, useState } from 'react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function useKonamiCode(onSuccess) {
  const [inputPattern, setInputPattern] = useState([]);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_CODE[inputPattern.length].length === 1 
        ? KONAMI_CODE[inputPattern.length].toLowerCase() 
        : KONAMI_CODE[inputPattern.length];

      if (key === expectedKey) {
        const nextPattern = [...inputPattern, e.key];
        setInputPattern(nextPattern);

        if (nextPattern.length === KONAMI_CODE.length) {
          setUnlocked(true);
          onSuccess?.();
          setInputPattern([]);
        }
      } else {
        setInputPattern([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputPattern, onSuccess]);

  return { unlocked, resetKonami: () => setUnlocked(false) };
}
