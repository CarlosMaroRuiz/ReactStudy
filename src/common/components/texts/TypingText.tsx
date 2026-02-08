import { useTypingEffect } from "@common/hooks/useTypingEffect";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypingText = ({ text, className = "text-md", speed, delay }: TypingTextProps) => {
  const { visibleChars, letters } = useTypingEffect({ text, speed, delay });
  return (
    <span className={className}>
      {letters.slice(0, visibleChars).join("")}
    </span>
  );
};

export default TypingText;