interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) => {
  const baseClasses = 'font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-nwt-coral hover:bg-nwt-peach text-white focus:ring-nwt-coral',
    secondary: 'bg-nwt-light-teal hover:bg-nwt-mint text-white focus:ring-nwt-light-teal',
    accent: 'bg-nwt-dark-teal hover:bg-nwt-navy text-white focus:ring-nwt-dark-teal',
    outline: 'border-2 border-nwt-coral text-nwt-coral hover:bg-nwt-coral hover:text-white bg-transparent focus:ring-nwt-coral',
    ghost: 'text-nwt-light-teal hover:bg-nwt-light-teal hover:bg-opacity-10 bg-transparent focus:ring-nwt-light-teal',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg', 
    lg: 'px-8 py-4 text-lg rounded-lg',
    xl: 'px-10 py-5 text-xl rounded-xl',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;