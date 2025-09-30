'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginData } from '@/types/auth';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

interface LoginFormProps {
  onToggleMode: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onToggleMode }) => {
  const { login, isLoading, forgotPassword } = useAuth();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>();

  const email = watch('email');

  const onSubmit = async (data: LoginData) => {
    const success = await login(data);
    if (success) {
      console.log('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleForgotPassword = async () => {
    if (email) {
      const success = await forgotPassword(email);
      if (success) {
        setShowForgotPassword(false);
      }
    } else {
      alert('Please enter your email address first.');
    }
  };

  if (showForgotPassword) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-5xl lg:text-6xl">
          Reset Your Password
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          <Input
            label="Email"
            type="email"
            value={email}
            placeholder="Enter your email"
            disabled
          />
          
          <div className="space-y-4 md:space-y-6">
            <Button
              onClick={handleForgotPassword}
              loading={isLoading}
              size="xl"
            >
              Send Reset Link
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowForgotPassword(false)}
              size="lg"
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-5xl lg:text-6xl">
        Welcome Back!
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
        <Input
          label="Email or Username"
          {...register('email', { required: 'Email or username is required' })}
          error={errors.email?.message}
          placeholder="Email or Username"
        />

        <Input
          label="Password"
          type="password"
          {...register('password', { required: 'Password is required' })}
          error={errors.password?.message}
          placeholder="Password"
        />

        <div className="text-right">
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg md:text-xl transition-colors duration-200"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          size="xl"
          loading={isLoading}
          disabled={isLoading}
          className="mt-8"
        >
          Sign In
        </Button>
      </form>

      <div className="text-center mt-8 md:mt-12">
        <button
          onClick={onToggleMode}
          className="text-blue-600 hover:text-blue-700 font-semibold text-xl md:text-2xl transition-colors duration-200"
          type="button"
        >
          New here? Get Started
        </button>
      </div>
    </div>
  );
};