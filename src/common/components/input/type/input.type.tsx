import { type InputHTMLAttributes } from 'react';


export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Tamaño del input */
  size?: 'sm' | 'md' | 'lg';
  /** Ancho completo */
  fullWidth?: boolean;
  /** Variante de color */
  variant?: 'default' | 'primary' | 'success' | 'error';
  /** Clase CSS adicional para el contenedor */
  containerClassName?: string;
}
