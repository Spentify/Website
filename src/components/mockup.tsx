'use client'

import React from 'react'
import Image from 'next/image';

export const Mockup: React.FC<{}> = (props) => {

  return (
    <div className="relative aspect-video mx-auto max-w-[366px] w-[366px] h-[729px]">
      <div
        className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-xl"
      />
      <div
        className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-[#0D75D8]]"
      >
        <Image
          src='/screen-tran.png'
          width={1170}
          height={2532}
          alt='Spentify - Transaction Screen'
        />
      </div>

      {/* Phone Frame SVG */}
      <svg
        viewBox="0 0 366 729"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"
      >
        <path
          fill="#F2F2F2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M300.092 1c41.22 0 63.223 21.99..."
        />
        <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4" />
      </svg>

      {/* Phone Frame Image */}
      <Image
        alt="phone frame"
        src="phone-frame.svg"
        width={366}
        height={729}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ color: 'transparent' }}
      />
    </div>
  );
}
