import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  className,
  onClick,
  isLoading = false,
  disabled,
  children = "Login",
  ...props
}) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-offset-0 focus-visible:ring-1",
        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoginButton;
