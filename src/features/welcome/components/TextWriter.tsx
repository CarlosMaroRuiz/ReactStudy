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
    <motion.h1 className={className} style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      {letters.slice(0, visibleChars).map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}

      {/* Cursor */}
      <motion.span
        animate={{ opacity: isStarted ? [1, 0] : 1 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{
          display: "inline-block",
          width: "0.6em",
          borderBottom: "3px solid currentColor",
          marginLeft: "2px",
          visibility: isStarted ? "visible" : "hidden"
        }}
      >
        &nbsp;
      </motion.span>
    </motion.h1>
  );
};

export default TextWriter;