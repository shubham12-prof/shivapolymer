'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navLinks } from '@/data/products'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-grey shadow-lg py-3'
          : 'bg-brand-grey/95 backdrop-blur-sm py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center">
              <span className="text-white font-bold font-heading text-sm">
                S
              </span>
            </div>
            <div className="leading-tight">
              <span className="block text-white font-heading font-bold text-lg tracking-wide">
                SHIVA
              </span>
              <span className="block text-brand-orange text-[10px] font-semibold tracking-widest uppercase -mt-0.5">
                POLYMER
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded',
                  pathname === link.href
                    ? 'text-brand-orange'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 bg-brand-orange text-white text-sm font-semibold rounded hover:bg-brand-orange-dark transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brand-grey-mid border-t border-gray-700 px-4 pt-3 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'block py-3 text-sm font-medium border-b border-gray-700',
                pathname === link.href
                  ? 'text-brand-orange'
                  : 'text-gray-300 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center px-5 py-3 bg-brand-orange text-white text-sm font-semibold rounded hover:bg-brand-orange-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
