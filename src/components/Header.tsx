import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  // Hide main navigation when user is logged in and on dashboard
  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  const showMainNav = !user || !isDashboardRoute;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to={user ? "/dashboard" : "/"} className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              PayAPI
            </Link>
          </div>
          
          {/* Desktop Navigation - Only show when not logged in or not on dashboard */}
          {showMainNav && (
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`transition-colors ${isActive('/features') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
              >
                Contact
              </Link>
            </nav>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <User size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg flex items-center"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {showMainNav && (
                <>
                  <Link 
                    to="/" 
                    className={`transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/features" 
                    className={`transition-colors ${isActive('/features') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="/pricing" 
                    className={`transition-colors ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/about" 
                    className={`transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                {user ? (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/dashboard"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-left"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}