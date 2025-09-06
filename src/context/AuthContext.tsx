import React, { createContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (email: string, pass: string) => void;
  logout: () => void;
  register: (name: string, email: string, pass: string) => void;
  adminLogin: (user: string, pass: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // MOCK IMPLEMENTATION
  const login = (email: string, pass: string) => {
    console.log('Logging in with', email, pass);
    setUser({ id: '1', name: 'Demo User', email });
    setIsAdmin(false);
  };

  const adminLogin = (username: string, pass: string) => {
    if (username === 'admin' && pass === 'supreme2024') {
      setUser({ id: 'admin', name: 'Admin', email: 'admin@supreme.com' });
      setIsAdmin(true);
    } else {
      alert('Invalid admin credentials');
    }
  };

  const register = (name: string, email: string, pass: string) => {
    console.log('Registering with', name, email, pass);
    setUser({ id: '1', name, email });
    setIsAdmin(false);
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout, register, adminLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
