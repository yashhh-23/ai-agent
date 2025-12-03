import React from "react"
import Image from "next/image"

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text column */}
          <div className="md:col-span-7">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Build faster. Design smarter. Ship confidently.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl">
              Ship high-quality products with a unified platform that centralizes knowledge,
              automates workflows, and surfaces actionable insights — so teams can focus on real
              impact instead of repetitive work.
            </p>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Fast to adopt, built for scale, and secure by design — everything you need to move
              from idea to production with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <a
                href="#get-started"
                className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow-sm text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Start Free Trial
              </a>

              <a
                href="#learn-more"
                className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded px-2 py-2"
              >
                Learn More
              </a>
            </div>

            {/* Trust note with sr-only label */}
            <div className="mt-6 text-sm text-slate-500">
              <span className="sr-only">Customer trust note:</span>
              Trusted by product teams at startups and enterprises worldwide.
            </div>
          </div>

          {/* Image column */}
          <div className="md:col-span-5">
            <div className="rounded-xl border border-slate-100 overflow-hidden shadow-sm">
              {/* Placeholder SVG with gradient fill. Using width 100% responsive SVG */}
              <svg
                role="img"
                aria-label="Product preview illustration"
                viewBox="0 0 800 520"
                className="w-full h-auto block"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>

                  <linearGradient id="g2" x1="0" x2="1">
                    <stop offset="0%" stopColor="#EFF6FF" />
                    <stop offset="100%" stopColor="#F8FAFC" />
                  </linearGradient>

                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="18" floodColor="#0f172a" floodOpacity="0.06" />
                  </filter>
                </defs>

                {/* Background panel */}
                <rect x="24" y="24" rx="20" ry="20" width="752" height="472" fill="url(#g2)" />

                {/* Top bar */}
                <rect x="56" y="56" rx="8" ry="8" width="688" height="48" fill="url(#g1)" />

                {/* Left column cards */}
                <g transform="translate(56,124)">
                  <rect width="448" height="360" rx="12" fill="white" stroke="#e6edf3" />
                  <rect x="20" y="20" width="408" height="28" rx="6" fill="#f1f5f9" />
                  <rect x="20" y="64" width="180" height="20" rx="6" fill="#eef2ff" />
                  <rect x="20" y="96" width="360" height="14" rx="6" fill="#f8fafc" />
                  <rect x="20" y="122" width="360" height="14" rx="6" fill="#f8fafc" />
                  <rect x="20" y="148" width="360" height="14" rx="6" fill="#f8fafc" />
                </g>

                {/* Right panel with gradient chart */}
                <g transform="translate(520,124)">
                  <rect width="216" height="180" rx="10" fill="url(#g1)" filter="url(#shadow)" />
                  <g transform="translate(20,20)">
                    <rect width="176" height="24" rx="6" fill="rgba(255,255,255,0.12)" />
                    <rect y="44" width="12" height="80" rx="4" fill="rgba(255,255,255,0.28)" />
                    <rect x="28" y="24" width="12" height="100" rx="4" fill="rgba(255,255,255,0.9)" />
                    <rect x="56" y="8" width="12" height="116" rx="4" fill="rgba(255,255,255,0.6)" />
                    <rect x="84" y="40" width="12" height="84" rx="4" fill="rgba(255,255,255,0.7)" />
                  </g>
                </g>

                {/* Accent circle */}
                <circle cx="690" cy="420" r="40" fill="url(#g1)" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
