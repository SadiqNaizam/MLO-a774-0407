import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

import Heading from './Heading';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import ForgotPasswordLink from './ForgotPasswordLink';
import LoginButton from './LoginButton';
import SignUpLink from './SignUpLink';

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }).min(6, { message: "Password must be at least 6 characters." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
  onLoginSuccess?: (data: LoginFormValues) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ className, onLoginSuccess, onForgotPassword, onSignUp }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'onTouched', // Validate on blur for better UX
  });

  const onSubmit = async (data: LoginFormValues) => {
    if (isLoading) return;
    setIsLoading(true);
    console.log("Login form submitted:", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    if (onLoginSuccess) {
      onLoginSuccess(data);
    }
    // form.reset(); // Optionally reset form on success
  };

  const handleForgotPassword = React.useCallback(() => {
    if (isLoading) return;
    console.log("Forgot password clicked");
    if (onForgotPassword) {
      onForgotPassword();
    }
  }, [isLoading, onForgotPassword]);

  const handleSignUp = React.useCallback(() => {
    if (isLoading) return;
    console.log("Sign up clicked");
    if (onSignUp) {
      onSignUp();
    }
  }, [isLoading, onSignUp]);

  return (
    <div className={cn("w-full", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          <Heading />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <InputEmail
                  id="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...field}
                />
                <FormMessage className="text-xs pt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <InputPassword
                  id="password"
                  label="Password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  {...field}
                />
                <FormMessage className="text-xs pt-1" />
              </FormItem>
            )}
          />
          
          <div className="self-start">
            <ForgotPasswordLink onClick={handleForgotPassword} disabled={isLoading} />
          </div>

          <LoginButton type="submit" isLoading={isLoading} disabled={isLoading}>
            Login
          </LoginButton>
        
          <SignUpLink onSignUpClick={handleSignUp} />
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
