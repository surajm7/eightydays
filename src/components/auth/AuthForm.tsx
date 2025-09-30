'use client'

import React from 'react';
import { Card } from '@/components/ui/Card';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <Card className="p-8">
      {isLogin ? (
        <LoginForm onToggleMode={() => setIsLogin(false)} />
      ) : (
        <SignupForm onToggleMode={() => setIsLogin(true)} />
      )}
    </Card>
  );
};