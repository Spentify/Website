import Image from 'next/image'
import { Mockup } from '@/components/mockup'

export default function Hero() {
  return (
    <div className='container px-4 sm:px-6 lg:px-8'>
      <div className="mx-auto lg:max-w-3xl lg:px-5 text-center pt-16 pb-16 lg:pb-16">
        <h1 className="text-3xl md:text-4xl/12 font-medium tracking-tight text-gray-900 px-3 lg:px-20">See where your money goes and what you have left.</h1>
        <p className="mt-6 text-lg text-gray-600">
          Take control of your money with <span className='text-[#0e76d9]'>Spentify</span> — a simple, clean expense tracker to manage spending, budgets, and savings.
        </p>
        <div className="mt-8 flex justify-center flex-wrap gap-x-6 gap-y-4">
          <a
            aria-label="Download on the App Store"
            href="https://apps.apple.com/kh/app/spentify-expense-tracker/id1439556350"
            target='_blank'
          >
            <Image
              src="/appstore.svg"
              width={150}
              height={48}
              alt='appstore'
            />
          </a>
          <a
            aria-label="Download on the Google Play"
            href="https://play.google.com/store/apps/details?id=com.apppeppers.jamnay"
            target='_blank'
          >
            <Image
              src="/google-play.svg"
              width={150}
              height={48}
              alt='google-play'
            />
          </a>
        </div>
      </div>
      <div className='pb-8'>
        <Mockup />
      </div>
    </div>
  )
}
