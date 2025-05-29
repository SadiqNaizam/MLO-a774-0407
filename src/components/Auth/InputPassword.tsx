import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputPasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  id: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  id,
  containerClassName,
  labelClassName,
  inputClassName,
  ...props
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", containerClassName)}>
      <Label htmlFor={id} className={cn("text-sm font-medium text-muted-foreground", labelClassName)}>
        {label}
      </Label>
      <Input
        type="password"
        id={id}
        className={cn(
          "border-0 border-b-2 border-input bg-transparent px-1 py-2 text-base text-card-foreground",
          "focus:border-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none",
          "placeholder:text-muted-foreground/80",
          inputClassName
        )}
        {...props}
      />
    </div>
  );
};

export default InputPassword;
