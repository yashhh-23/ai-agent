import React from 'react'
import Link from 'next/link'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear()

  const linkClasses =
    'text-sm text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded'

  return (
    <footer aria-label="Footer" className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div
                aria-hidden
                className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold"
              >
                B
              </div>
              <div>
                <div className="font-semibold text-neutral-100">BrandName</div>
                <div className="text-xs text-neutral-400">Modern UI starter kit</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-400">
              A modern UI starter kit, accessible, responsive, and ready for production.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Link href="#" aria-label="Twitter" className={linkClasses}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 5.92c-.66.29-1.36.49-2.09.58a3.64 3.64 0 0 0 1.6-2.01 7.28 7.28 0 0 1-2.31.88 3.62 3.62 0 0 0-6.18 3.3A10.3 10.3 0 0 1 3.16 4.6a3.62 3.62 0 0 0 1.12 4.83c-.53-.02-1.03-.16-1.47-.4v.04a3.62 3.62 0 0 0 2.9 3.55c-.32.09-.66.14-1.01.14-.25 0-.5-.03-.74-.07a3.63 3.63 0 0 0 3.38 2.52A7.26 7.26 0 0 1 2 18.57a10.24 10.24 0 0 0 5.56 1.63c6.67 0 10.32-5.53 10.32-10.32v-.47A7.35 7.35 0 0 0 22 5.92z" />
                </svg>
              </Link>

              <Link href="#" aria-label="GitHub" className={linkClasses}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.58 2 12.18c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.06 1.54 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85.01 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.2 10.2 0 0 0 22 12.18C22 6.58 17.52 2 12 2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-100">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className={linkClasses}>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#features" className={linkClasses}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#integrations" className={linkClasses}>
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-100">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#about" className={linkClasses}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#careers" className={linkClasses}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#press" className={linkClasses}>
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-100">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#docs" className={linkClasses}>
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#contact" className={linkClasses}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#privacy" className={linkClasses}>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-400">
              © {year} BrandName. All rights reserved.
            </div>

            <div className="text-sm text-neutral-300">
              Contact:{' '}
              <a
                href="mailto:hi@example.com"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              >
                hi@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
