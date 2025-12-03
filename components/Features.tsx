import React from 'react'

type Feature = {
  title: string
  desc: string
  icon: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    title: 'Accessible by default',
    desc: 'Semantic HTML, keyboard-first interactions, and ARIA-ready patterns.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 8v6M4 12h16" />
      </svg>
    ),
  },
  {
    title: 'Responsive layout',
    desc: 'Mobile-first grid system that adapts seamlessly across breakpoints.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8h10M7 12h10M7 16h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Design tokens',
    desc: 'A consistent color system, spacing scale and typography for predictable layouts.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4 15a7.9 7.9 0 000-6M4.6 9a7.9 7.9 0 000 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Ready components',
    desc: 'Buttons, forms, navs and cards that are easy to compose and style.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path d="M3 7h18M3 12h18M3 17h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Performance focused',
    desc: 'Minimal JS, optimized assets, and sensible defaults for fast delivery.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path d="M12 2v6m0 8v6M4 12h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Customizable',
    desc: 'Easily override tokens, extend components, and plug into your stack.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features(): JSX.Element {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="features-heading" className="text-2xl font-bold text-slate-900">
            What you get
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            A thoughtfully designed toolkit that helps teams ship faster — with accessible, responsive,
            and customizable building blocks.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="p-4 rounded-lg border border-neutral-100 bg-white shadow-sm hover:border-indigo-400 hover:shadow-lg transition-all duration-200 ease-in-out focus-within:ring-2 focus-within:ring-indigo-400"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-indigo-50 p-2 rounded-md inline-flex items-center justify-center">
                  {f.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-base text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
                </div>
              </div>

              {/* Make card keyboard-focusable for accessibility */}
              <a
                href={`#${f.title.toLowerCase().split(' ').join('-')}`}
                className="absolute inset-0"
                aria-hidden="true"
                tabIndex={-1}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
