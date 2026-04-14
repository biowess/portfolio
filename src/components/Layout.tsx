import { Link, NavLink, Outlet } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/research', label: 'Research' },
  { path: '/projects', label: 'Projects' },
  { path: '/writing', label: 'Writing' },
  { path: '/photography', label: 'Photography' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-apple-light dark:bg-apple-dark border-b border-black/5 dark:border-white/5">
        <div className="max-w-[980px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight hover:text-hematology transition-colors">
            Biowess.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[14px] transition-colors ${
                    isActive 
                      ? 'text-hematology font-medium' 
                      : 'text-apple-textLight/80 dark:text-apple-textDark/80 hover:text-apple-textLight dark:hover:text-apple-textDark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pl-4 border-l border-black/10 dark:border-white/10">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-apple-light dark:bg-apple-dark border-b border-black/5 dark:border-white/5 py-4 px-6 flex flex-col space-y-4 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[17px] py-2 transition-colors ${
                    isActive 
                      ? 'text-hematology font-medium' 
                      : 'text-apple-textLight/80 dark:text-apple-textDark/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-apple-light dark:bg-apple-surfaceDark1 py-12 border-t border-black/5 dark:border-white/5">
        <div className="max-w-[980px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[12px] text-apple-textLight/60 dark:text-apple-textDark/60">
          <p>&copy; {new Date().getFullYear()} Mohammed W. Hammami. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-hematology transition-colors">Contact</Link>
<a
  href="https://www.linkedin.com/in/biowess"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-hematology transition-colors"
>
  LinkedIn
</a>
<a
  href="https://github.com/biowess"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-hematology transition-colors"
>
  GitHub
</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
