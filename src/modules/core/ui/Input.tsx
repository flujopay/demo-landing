import { clsx } from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={id}
          className={clsx(
            "rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm transition-colors outline-none placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900",
            { "border-red-500 focus:border-red-500 focus:ring-red-500": error },
            className,
          )}
          {...props}
        />
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </div>
    );
  },
);

Input.displayName = "Input";
