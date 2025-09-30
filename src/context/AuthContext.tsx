'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, LoginData, SignupData } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (data: LoginData) => Promise<boolean>;
  signup: (data: SignupData) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('eightydays-user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkAuth();
  }, []);

  const login = async (data: LoginData): Promise<boolean> => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      
      // Mock authentication - in real app, this would be an API call
      if (data.email && data.password) {
        const user: User = {
          id: '1',
          email: data.email,
          username: data.email.split('@')[0],
          firstName: 'John',
          lastName: 'Doe',
        };

        setState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });

        localStorage.setItem('eightydays-user', JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const signup = async (data: SignupData): Promise<boolean> => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));

      // Validate passwords match
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Mock successful signup
      const user: User = {
        id: '1',
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
      };

      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });

      localStorage.setItem('eightydays-user', JSON.stringify(user));
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const logout = () => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    localStorage.removeItem('eightydays-user');
    
    // Redirect to home page
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      // Mock successful password reset request
      alert(`Password reset link sent to ${email}`);
      return true;
    } catch (error) {
      console.error('Password reset failed:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      signup,
      logout,
      forgotPassword,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};