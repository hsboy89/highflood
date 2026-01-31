import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    fullWidth?: boolean;
    isLoading?: boolean;
    children: ReactNode;
}

// Combine HTML motion props
type MotionButtonProps = ButtonProps & MotionProps;

export default function Button({
    variant = 'primary',
    fullWidth = false,
    isLoading = false,
    children,
    className = '',
    disabled,
    ...props
}: MotionButtonProps) {
    const baseClasses = "rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-electric-blue hover:bg-electric-blue-dark text-white shadow-lg shadow-electric-blue/25 hover:shadow-electric-blue/40",
        outline: "border-2 border-white/30 hover:border-white/60 text-white"
    };

    const widthClass = fullWidth ? "w-full" : "w-full sm:w-auto";
    const paddingClass = variant === 'primary' ? "px-8 py-4" : "px-8 py-4"; // Keep consistent padding

    return (
        <motion.button
            className={`${baseClasses} ${variants[variant]} ${widthClass} ${paddingClass} ${className}`}
            disabled={isLoading || disabled}
            whileHover={{ scale: disabled || isLoading ? 1 : 1.02, y: disabled || isLoading ? 0 : -2 }}
            whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {children}
                </>
            ) : (
                children
            )}
        </motion.button>
    );
}
