'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type Props = {
  brand?: { name?: string }
}

export const Navbar: React.FC<Props> = ({ brand = { name: 'BrandName' } }) => {
  const [open, setOpen] = useState(false)
  const menuId = 'primary-navigation'

  const handleToggle = () => setOpen((v) => !v)
  const handleClose = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3">
            <div
              aria-hidden
              className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold"
            >
              {/* optional short mark */}
              B
            </div>
            <Link href="/" className="text-lg font-semibold leading-none">
              {brand.name}
            </Link>
          </div>

          {/* Right (desktop) */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
            <Link
              href="#features"
              className="text-sm hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-2 py-1"
            >
              Features
            </Link>

            <Link
              href="#pricing"
              className="text-sm hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-2 py-1"
            >
              Pricing
            </Link>

            <Link
              href="#contact"
              className="text-sm hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-2 py-1"
            >
              Contact
            </Link>

            <Link
              href="#get-started"
              className="ml-2 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-controls={menuId}
              aria-expanded={open}
              onClick={handleToggle}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 h-10 w-10 flex items-center justify-center"
            >
              {/* Icon: three lines or X */}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? (
                // X icon
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        // We control the maxHeight via inline style for smoother height transition
        style={{
          maxHeight: open ? 384 : 0, // max-h-96 ≈ 24rem = 384px
        }}
      >
        <div className="px-4 pt-2 pb-4 border-t border-neutral-200 bg-white/95">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary navigation">
            <Link
              href="#features"
              onClick={handleClose}
              className="block px-3 py-3 rounded-md text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              role="menuitem"
            >
              Features
            </Link>

            <Link
              href="#pricing"
              onClick={handleClose}
              className="block px-3 py-3 rounded-md text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              role="menuitem"
            >
              Pricing
            </Link>

            <Link
              href="#contact"
              onClick={handleClose}
              className="block px-3 py-3 rounded-md text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              role="menuitem"
            >
              Contact
            </Link>

            <Link
              href="#get-started"
              onClick={handleClose}
              className="mt-2 inline-flex items-center justify-center px-4 py-3 bg-indigo-600 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              role="menuitem"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
