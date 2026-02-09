
import { forwardRef } from "react";
import type { InputProps } from "./type/input.type";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      fullWidth = false,
      variant = 'default',
      containerClassName = '',
      className = '',
      ...inputProps
    },
    ref
  ) => {
    return (
      <div
        className={`
          input-container
          input-container--${size}
          input-container--${variant}
          ${fullWidth ? 'input-container--full-width' : ''}
          ${inputProps.disabled ? 'input-container--disabled' : ''}
          ${containerClassName}
        `.trim()}
      >
        <input
          ref={ref}
          className={`input-field ${className}`.trim()}
          {...inputProps}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;