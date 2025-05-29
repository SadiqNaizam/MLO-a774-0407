import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Auth/LoginForm';

// This interface defines the structure of the data passed to onLoginSuccess.
// It should match the 'LoginFormValues' type inferred from 'loginFormSchema' in LoginForm.tsx.
// Since LoginFormValues is not exported from LoginForm.tsx (based on provided context),
// we define a compatible type here for use in this page component.
interface LoginPageFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const handleLoginSuccess = (data: LoginPageFormValues) => {
    console.log('Login successful from Page:', data);
    // In a real application, you would typically navigate the user to a dashboard,
    // set authentication tokens, or update global application state.
    // Using alert() for demonstration purposes as it's a simple login clone.
    alert(`Login Succeeded!\nEmail: ${data.email}`);
    // Note: It's generally not a good practice to handle raw passwords in client-side success callbacks
    // beyond the initial form submission to a secure backend.
    // The 'password' field is included here to match the implied structure of LoginFormValues.
  };

  const handleForgotPassword = () => {
    console.log('Forgot password action triggered from Page.');
    // In a real application, this might open a modal dialog for email input
    // or navigate to a dedicated password reset page.
    alert('Forgot Password flow initiated. (Placeholder)');
  };

  const handleSignUp = () => {
    console.log('Sign up action triggered from Page.');
    // In a real application, this would typically navigate the user to a registration page.
    alert('Sign Up flow initiated. (Placeholder)');
  };

  return (
    <MainAppLayout>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
        // className prop can be used here if specific styling for LoginForm
        // is needed only on this page, e.g., additional margins.
      />
    </MainAppLayout>
  );
};

export default LoginPage;
