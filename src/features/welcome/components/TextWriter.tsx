import { motion } from "framer-motion";
import { useTypingEffect } from "@common/hooks/useTypingEffect";

interface TextWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TextWriter = ({ text, className, speed, delay }: TextWriterProps) => {
  const { visibleChars, isStarted, letters } = useTypingEffect({ text, speed, delay });

  return (
    <motion.h1 
      className={className} 
      style={{ 
        display: "block", 
        wordBreak: "break-word", 
        whiteSpace: "pre-wrap" 
      }}
    >
      {letters.slice(0, visibleChars).map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          {letter}
        </motion.span>
      ))}

      {/* Cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{
          display: "inline-block",
          width: "0.5em", // Ajustado para ser más proporcional
          borderBottom: "3px solid currentColor",
          marginLeft: "2px",
          verticalAlign: "middle",
          // Solo mostramos el cursor si ya empezó pero no necesariamente lo ocultamos al final
          visibility: isStarted ? "visible" : "hidden"
        }}
      >
        &nbsp;
      </motion.span>
    </motion.h1>
  );
};

export default TextWriter;