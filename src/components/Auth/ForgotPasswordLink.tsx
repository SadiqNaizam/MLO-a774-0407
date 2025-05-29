import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface ForgotPasswordLinkProps extends Pick<ButtonProps, 'onClick' | 'disabled'> {
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ className, onClick, disabled }) => {
  return (
    <Button
      variant="link"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "p-0 h-auto text-sm font-medium text-muted-foreground hover:text-primary hover:no-underline focus-visible:ring-offset-0 focus-visible:ring-1",
        className
      )}
    >
      Forgot Password
    </Button>
  );
};

export default ForgotPasswordLink;
