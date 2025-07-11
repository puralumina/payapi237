import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  subscription: {
    plan: 'basic' | 'pro' | 'enterprise';
    status: 'active' | 'inactive' | 'expired';
    renewalDate: string;
    apiCalls: number;
    apiLimit: number;
  };
  apiKey: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateSubscription: (plan: string) => void;
  regenerateApiKey: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('payapi_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    if (email && password) {
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        subscription: {
          plan: 'basic',
          status: 'active',
          renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          apiCalls: 1250,
          apiLimit: 10000
        },
        apiKey: 'pk_test_' + Math.random().toString(36).substr(2, 32),
        createdAt: new Date().toISOString()
      };
      
      setUser(mockUser);
      localStorage.setItem('payapi_user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock registration
    if (name && email && password) {
      const mockUser: User = {
        id: '1',
        email,
        name,
        subscription: {
          plan: 'basic',
          status: 'inactive',
          renewalDate: '',
          apiCalls: 0,
          apiLimit: 1000
        },
        apiKey: 'pk_test_' + Math.random().toString(36).substr(2, 32),
        createdAt: new Date().toISOString()
      };
      
      setUser(mockUser);
      localStorage.setItem('payapi_user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('payapi_user');
  };

  const updateSubscription = (plan: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        subscription: {
          ...user.subscription,
          plan: plan as 'basic' | 'pro' | 'enterprise',
          status: 'active' as const,
          renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          apiLimit: plan === 'basic' ? 10000 : plan === 'pro' ? 100000 : 1000000
        }
      };
      setUser(updatedUser);
      localStorage.setItem('payapi_user', JSON.stringify(updatedUser));
    }
  };

  const regenerateApiKey = () => {
    if (user) {
      const updatedUser = {
        ...user,
        apiKey: 'pk_test_' + Math.random().toString(36).substr(2, 32)
      };
      setUser(updatedUser);
      localStorage.setItem('payapi_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateSubscription,
    regenerateApiKey
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}