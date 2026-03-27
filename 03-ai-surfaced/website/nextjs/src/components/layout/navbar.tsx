/**
 * @fileoverview Navigation/Navbar component
 * @description Main site navigation with dropdowns and mobile menu
 * 
 * AI/LLM GUIDE:
 * - Navigation items defined in lib/constants.ts
 * - Uses Radix UI for accessible dropdowns
 * - Mobile menu uses sheet/drawer pattern
 * - All interactive elements have proper focus states
 */

'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SITE_CONFIG, type NavItem } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ChevronDownIcon } from '@/components/icons';

/**
 * Logo component - Ditto brand mark
 */
function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-0.5 text-primary-black hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2 rounded"
      aria-label={`${SITE_CONFIG.name} home`}
    >
      <span className="text-2xl font-bold">d</span>
      <span className="text-2xl font-bold">itto</span>
      <span className="text-2xl font-bold text-accent-yellow">.</span>
    </Link>
  );
}

/**
 * Desktop navigation dropdown
 */
interface NavDropdownProps {
  item: NavItem;
}

function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium',
          'text-primary-black hover:text-primary-black/70',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2 rounded',
          'transition-colors'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
          if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      >
        {item.label}
        <ChevronDownIcon 
          className={cn(
            'h-3 w-3 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && item.children && (
        <div 
          className={cn(
            'absolute top-full left-0 mt-1 min-w-[280px]',
            'bg-white rounded-xl shadow-lg border border-gray-100',
            'py-4 px-2',
            'animate-in fade-in slide-in-from-top-2 duration-200'
          )}
          role="menu"
        >
          {item.children.map((group, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              {group.label && (
                <p className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {group.label}
                </p>
              )}
              {group.children?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href || '#'}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg',
                    'text-sm text-primary-black',
                    'hover:bg-gray-50 transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-black'
                  )}
                  role="menuitem"
                >
                  <span className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center',
                    link.color === 'red' && 'bg-red-100 text-red-600',
                    link.color === 'sky' && 'bg-sky-100 text-sky-600',
                    link.color === 'pink' && 'bg-pink-100 text-pink-600',
                    link.color === 'purple' && 'bg-purple-100 text-purple-600',
                    link.color === 'blue' && 'bg-blue-100 text-blue-600',
                    link.color === 'green' && 'bg-green-100 text-green-600',
                    link.color === 'yellow' && 'bg-yellow-100 text-yellow-600',
                    link.color === 'gold' && 'bg-amber-100 text-amber-600',
                    link.color === 'lavender' && 'bg-violet-100 text-violet-600',
                    link.color === 'lichen' && 'bg-emerald-100 text-emerald-600',
                  )}>
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </span>
                  <span>{link.label}</span>
                </Link>
              ))}
              {/* Direct links (no nested children) */}
              {group.href && (
                <Link
                  href={group.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg',
                    'text-sm text-primary-black',
                    'hover:bg-gray-50 transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-black'
                  )}
                  role="menuitem"
                >
                  <span className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center',
                    group.color === 'blue' && 'bg-blue-100 text-blue-600',
                    group.color === 'gold' && 'bg-amber-100 text-amber-600',
                    group.color === 'green' && 'bg-green-100 text-green-600',
                    group.color === 'lavender' && 'bg-violet-100 text-violet-600',
                  )}>
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </span>
                  <span>{group.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Mobile menu button (hamburger)
 */
interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className={cn(
        'lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2 rounded'
      )}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span
        className={cn(
          'w-6 h-0.5 bg-primary-black transition-all duration-300',
          isOpen && 'rotate-45 translate-y-2'
        )}
      />
      <span
        className={cn(
          'w-6 h-0.5 bg-primary-black transition-all duration-300',
          isOpen && 'opacity-0'
        )}
      />
      <span
        className={cn(
          'w-6 h-0.5 bg-primary-black transition-all duration-300',
          isOpen && '-rotate-45 -translate-y-2'
        )}
      />
    </button>
  );
}

/**
 * Mobile navigation menu
 */
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'lg:hidden fixed inset-0 top-16 z-40',
        'bg-white',
        'overflow-y-auto overscroll-contain',
        'animate-in slide-in-from-top duration-300'
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <Container className="py-6">
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    'block py-2 text-lg font-medium text-primary-black',
                    'hover:text-primary-black/70 transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black rounded'
                  )}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ) : (
                <details className="group">
                  <summary
                    className={cn(
                      'flex items-center justify-between py-2 text-lg font-medium text-primary-black cursor-pointer',
                      'hover:text-primary-black/70 transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black rounded',
                      'list-none [&::-webkit-details-marker]:hidden'
                    )}
                  >
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 py-2 space-y-4">
                    {item.children?.map((group, idx) => (
                      <div key={idx}>
                        {group.label && !group.href && (
                          <p className="py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {group.label}
                          </p>
                        )}
                        {group.children?.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href || '#'}
                            className={cn(
                              'block py-2 text-base text-primary-black/80',
                              'hover:text-primary-black transition-colors',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black rounded'
                            )}
                            onClick={onClose}
                          >
                            {link.label}
                          </Link>
                        ))}
                        {group.href && (
                          <Link
                            href={group.href}
                            className={cn(
                              'block py-2 text-base text-primary-black/80',
                              'hover:text-primary-black transition-colors',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black rounded'
                            )}
                            onClick={onClose}
                          >
                            {group.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-gray-100">
          <Button asChild variant="secondary" className="w-full">
            <Link href={SITE_CONFIG.demoUrl}>Book a Demo</Link>
          </Button>
          <Button asChild className="w-full">
            <Link href={SITE_CONFIG.appUrl}>Get Started</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

/**
 * Main Navbar component
 * 
 * @example
 * // In layout.tsx
 * <Navbar />
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        'bg-white/95 backdrop-blur-sm',
        'border-b border-gray-100'
      )}
    >
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only',
          'focus:absolute focus:top-4 focus:left-4',
          'focus:z-50 focus:px-4 focus:py-2',
          'focus:bg-primary-black focus:text-white focus:rounded'
        )}
      >
        Skip to main content
      </a>

      <Container>
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href || '#'}
                  className={cn(
                    'px-3 py-2 text-sm font-medium',
                    'text-primary-black hover:text-primary-black/70',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-black focus-visible:ring-offset-2 rounded',
                    'transition-colors'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="ghost" size="sm">
              <Link href={SITE_CONFIG.demoUrl}>Book a Demo</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={SITE_CONFIG.appUrl}>Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
        </nav>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
