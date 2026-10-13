import Image from 'next/image'

export function Mockup() {
  return (
    <div className="relative mx-auto aspect-[366/729] w-full max-w-[366px]">
      <div className="absolute inset-[2%] rounded-[3rem] shadow-[0_28px_60px_-15px_rgba(15,50,90,0.3)]" />
      <div className="absolute left-[6.28%] top-[3.15%] h-[94.1%] w-[86.89%] overflow-hidden rounded-[2rem] bg-[#0e76d9]">
        <Image src="/screen-tran.png" fill sizes="(max-width: 640px) 260px, 318px" className="object-cover" priority alt="Spentify transaction screen showing income, expenses, remaining balance, and daily purchases" />
      </div>
      <Image src="/phone-frame.svg" fill sizes="(max-width: 640px) 300px, 366px" className="pointer-events-none" alt="" aria-hidden="true" />
    </div>
  )
}
