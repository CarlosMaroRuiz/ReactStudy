import type { ReactNode } from "react";
export interface ButtonType {
    children:ReactNode
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary'
}