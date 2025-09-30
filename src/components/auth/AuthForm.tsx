'use client'

import React from 'react';
import { Card } from '@/components/ui/Card';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

interface AuthFormProps {
  isLogin: boolean;
  onToggleMode: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onToggleMode }) => {
  return (
    <div>
      {isLogin ? (
        <LoginForm onToggleMode={onToggleMode} />
      ) : (
        <SignupForm onToggleMode={onToggleMode} />
      )}
    </div>
  );
};