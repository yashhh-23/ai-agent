'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Page(): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main className="min-h-screen font-sans antialiased text-neutral-900">
          <Navbar />
          <Hero />
          <Features />
          <ContactForm />
          <Footer />
        </main>
      </body>
    </html>
  )
}
