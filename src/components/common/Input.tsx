import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    requiredMark?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, requiredMark, className = '', ...props }, ref) => {
        const inputClasses =
            'w-full bg-deep-blue border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/40 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all';
        const labelClasses = 'block text-white/80 text-sm font-medium mb-2';
        const errorClasses = 'text-red-400 text-xs mt-1';

        return (
            <div className={className}>
                {label && (
                    <label className={labelClasses}>
                        {label} {requiredMark && <span className="text-electric-blue">*</span>}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`${inputClasses} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    {...props}
                />
                {error && <p className={errorClasses}>{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
