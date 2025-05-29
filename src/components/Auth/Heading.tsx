import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  className?: string;
  title?: string;
}

const Heading: React.FC<HeadingProps> = ({ className, title = "Welcome" }) => {
  return (
    <h1 className={cn("text-3xl font-bold text-center text-card-foreground", className)}>
      {title}
    </h1>
  );
};

export default Heading;
