import styles from './button.module.css';

type ButtonProps = {
  color?: string;
  backgroundColor?: string;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export default function Button({
  color,
  backgroundColor,
  variant = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) {
  const className = [
    styles['storybook-button'],
    styles[`storybook-button--${size}`],
    styles[`storybook-button--${variant}`]
  ].join(' ');

  return (
    <button
      type="button"
      className={className}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          color: ${color};
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
}
