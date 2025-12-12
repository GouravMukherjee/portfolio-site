import { ComponentProps, ReactNode } from 'react';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
} & ComponentProps<'button'> & ComponentProps<'a'>;

const variantMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'text-white hover:text-accent-cyan',
  outline: 'btn-outline',
  icon: 'btn-outline p-2',
};

const sizeMap: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = `${variantMap[variant]} ${sizeMap[size]} ${className ?? ''}`;
  if (rest.as === 'a') {
    const { href = '#', ...anchorProps } = rest;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon && <span className="mr-2 inline-flex">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button
      type="button"
      aria-busy={loading}
      aria-disabled={disabled || loading}
      disabled={disabled || loading}
      className={classes}
      {...rest}
    >
      {icon && <span className="mr-2 inline-flex" aria-hidden="true">{icon}</span>}
      <span>{loading ? 'Loading…' : children}</span>
    </button>
  );
}

export default Button;
