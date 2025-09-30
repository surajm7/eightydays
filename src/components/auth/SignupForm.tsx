'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupData } from '@/types/auth';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

interface SignupFormProps {
  onToggleMode: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onToggleMode }) => {
  const { signup, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupData>();

  const password = watch('password');

  const onSubmit = async (data: SignupData) => {
    const success = await signup(data);
    if (success) {
      console.log('Signup successful!');
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-5xl lg:text-6xl">
        Sign Up To Eighty Days!
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input
            label="First Name"
            {...register('firstName', { 
              required: 'First name is required',
              minLength: { value: 2, message: 'First name must be at least 2 characters' }
            })}
            error={errors.firstName?.message}
            placeholder="First Name"
          />
          <Input
            label="Last Name"
            {...register('lastName', { 
              required: 'Last name is required',
              minLength: { value: 2, message: 'Last name must be at least 2 characters' }
            })}
            error={errors.lastName?.message}
            placeholder="Last Name"
          />
        </div>

        <Input
          label="Email"
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
          error={errors.email?.message}
          placeholder="Email"
        />

        <Input
          label="Username"
          {...register('username', { 
            required: 'Username is required',
            minLength: { value: 3, message: 'Username must be at least 3 characters' },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: 'Username can only contain letters, numbers, and underscores'
            }
          })}
          error={errors.username?.message}
          placeholder="Username"
        />

        <Input
          label="Password"
          type="password"
          {...register('password', { 
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
          })}
          error={errors.password?.message}
          placeholder="Password"
        />

        <Input
          label="Re-enter Password"
          type="password"
          {...register('confirmPassword', { 
            required: 'Please confirm your password',
            validate: value => value === password || 'Passwords do not match'
          })}
          error={errors.confirmPassword?.message}
          placeholder="Re-enter Password"
        />

        <Button
          type="submit"
          size="xl"
          loading={isLoading}
          disabled={isLoading}
          className="mt-8"
        >
          Get Started
        </Button>
      </form>

      <div className="text-center mt-8 md:mt-12">
        <button
          onClick={onToggleMode}
          className="text-blue-600 hover:text-blue-700 font-semibold text-xl md:text-2xl transition-colors duration-200"
          type="button"
        >
          Already a member? Login
        </button>
      </div>
    </div>
  );
};