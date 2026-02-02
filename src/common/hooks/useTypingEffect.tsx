import { useState, useEffect } from "react";

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypingEffect = ({ 
  text, 
  speed = 60, 
  delay = 1 
}: UseTypingEffectProps) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: number;

  
    setVisibleChars(0);
    setIsDone(false);

    const type = (index: number) => {
      if (index <= text.length) {
        setVisibleChars(index);
        
        if (index < text.length) {
          const char = text[index];
          
          // Lógica de realismo
          let nextDelay = speed + Math.random() * 40; 
          if (/[.,!?]/.test(char)) nextDelay += 450;
          else if (char === " ") nextDelay += 100;

          timeoutId = window.setTimeout(() => type(index + 1), nextDelay);
        } else {
          setIsDone(true);
        }
      }
    };

    const startTimeout = window.setTimeout(() => {
      setIsStarted(true);
      type(0);
    }, delay * 1000);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { visibleChars, isStarted, isDone, letters: Array.from(text) };
};