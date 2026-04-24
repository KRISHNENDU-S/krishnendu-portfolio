import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles = {
  primary:
    "bg-accent-primary text-white hover:bg-indigo-500 border border-accent-primary",
  outline:
    "border border-accent-primary text-accent-primary hover:bg-accent-glow",
  ghost:
    "border border-bg-border text-text-secondary hover:border-accent-primary hover:text-text-primary",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  as,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-mono font-medium rounded transition-all duration-200 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
