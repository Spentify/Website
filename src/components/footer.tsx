import Image from "next/image";
import Link from "next/link";

import XIcon from '@/components/icons/x-icon';
import MagnifierIcon from '@/components/icons/magnifier-icon';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-[#e8ecf1]">
      <div className="container px-5 md:px-0 py-6 flex justify-between">
        <div className="flex flex-col flex-start max-w-sm gap-2">
          <div className="flex items-center gap-1.5">
            <Link href="/">
              <Image
                alt="Logo"
                width={193}
                height={34}
                loading='eager'
                fetchPriority="high"
                decoding="async"
                className={'w-auto h-[36px]'}
                src="/logo.png"
              />
            </Link>
            <h1 className='font-base text-lg font-medium'>Spentify</h1>
          </div>
          <p className="text-sm">
            A simple, clean expense tracker to manage spending, budgets, and savings.
          </p>

          <div className="flex gap-3 py-2">
            <Link href="https://x.com/spentify__app" target="_blank">
              <XIcon className="w-4 h-4" />
            </Link>
            <Link href="https://www.instagram.com/spentify.app/" target="_blank">
              <MagnifierIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-5 md:px-0 py-5 border-t border-[#e8ecf1]">
        <p className="text-sm text-gray-500">© 2026 Spentify . All rights reserved.</p>
      </div>
    </footer>
  );
}
