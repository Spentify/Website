'use client'

import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const elements = root.current?.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements?.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('reveal-pending')
      observer.observe(element)
    })
    return () => { observer.disconnect(); elements?.forEach(element => element.classList.remove('reveal-pending')) }
  }, [])
  return <div ref={root}>{children}</div>
}
