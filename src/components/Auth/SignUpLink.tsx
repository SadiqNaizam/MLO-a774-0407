import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface SignUpLinkProps extends Pick<ButtonProps, 'onClick'> {
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ className, onClick }) => {
  return (
    <p className={cn("text-sm text-center text-card-foreground", className)}>
      Don't have an account?{' '}
      <Button
        variant="link"
        onClick={onClick}
        className="p-0 h-auto text-sm font-medium text-primary underline hover:text-primary/90 focus-visible:ring-offset-0 focus-visible:ring-1"
      >
        SignUp
      </Button>
    </p>
  );
};

export default SignUpLink;
