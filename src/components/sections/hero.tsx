import { ArrowDown, Check } from 'lucide-react'
import { Mockup } from '@/components/mockup'
import DownloadButtons from '@/components/download-buttons'

export default function Hero() {
  return (
    <section className="home-hero relative overflow-hidden">
      <div className="container grid items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <div className="hero-enter inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs font-semibold tracking-wide text-blue-700"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> A little clarity. Every day.</div>
          <h1 className="hero-enter hero-delay-1 mt-6 max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-900 sm:text-6xl lg:text-[72px]">Your spending,<br /><span className="text-[#0e76d9]">made clear.</span></h1>
          <p className="hero-enter hero-delay-2 mt-6 max-w-md text-lg leading-8 text-slate-600">Track everyday expenses, manage budgets, and see what’s left. Find your rhythm with Spentify.</p>
          <div className="hero-enter hero-delay-3 mt-8"><DownloadButtons /></div>
          <p className="hero-enter hero-delay-3 mt-5 flex items-center gap-2 text-sm text-slate-500"><Check size={16} className="text-blue-600" /> Available for iOS and Android</p>
          <a href="#features" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Explore Spentify <ArrowDown size={16} /></a>
        </div>
        <div className="hero-enter hero-delay-2 relative mx-auto w-full max-w-[420px] px-6 sm:px-12">
          <div className="phone-halo absolute -inset-x-12 inset-y-14 rounded-full" aria-hidden="true" />
          <div className="relative rotate-[-3deg] transition-transform duration-500 hover:rotate-0"><Mockup /></div>
          <div className="absolute -bottom-4 left-0 rounded-2xl border border-white bg-white/95 px-5 py-4 shadow-lg sm:-left-5"><span className="text-xs font-medium text-slate-500">A clearer picture</span><p className="mt-1 text-sm font-semibold text-slate-900">Every expense, in one place.</p></div>
        </div>
      </div>
    </section>
  )
}
