import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Search, BookOpen } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/articles', label: '文章' },
    { path: '/topics', label: '专题' },
    { path: '/about', label: '关于' }
  ];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <NavLink to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">技术随笔</span>
            </NavLink>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Search size={20} />
                </button>
                {searchOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4">
                    <input
                      type="text"
                      placeholder="搜索文章..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
              >
                <Menu size={20} />
              </button>
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-blue-600 transition-colors ${
                        isActive ? 'text-blue-600 font-semibold' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <div className="px-4 py-2 space-y-2">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg ${
                    isActive ? 'bg-blue-50 text-blue-600' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;