import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 border-b border-[#e8ecf1]">
      <div className="container px-5 md:px-0 py-4 flex justify-between">
        <div className="flex justify-center items-center gap-1.5">
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
      </div>
    </header>
  );
}
