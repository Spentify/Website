import Hero from '@/components/sections/hero'

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="container px-5 md:px-0 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8"><circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2"></circle><path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z" fill="#737373"></path><path fillRule="evenodd" clipRule="evenodd" d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z" fill="#171717"></path></svg>
            <h4 className="mt-6 font-semibold text-gray-900">Track money easily</h4>
            <p className="mt-2 text-gray-700">Record expenses and income in seconds — simple and fast.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm0 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.382a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553h-6.764a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 10.382 2z" fill="#737373"/>
              <g transform="translate(9.2 12) scale(0.9)">
                <path
                  d="M0 7.49996C0 3.52583 3.09098 0.27365 7 0.0163574V4.0354C5.30385 4.27801 4 5.73672 4 7.49996C4 9.43295 5.567 11 7.5 11C8.28618 11 9.01181 10.7407 9.5961 10.3031L12.438 13.1451C11.1188 14.3 9.39113 15 7.5 15C3.35786 15 0 11.6421 0 7.49996Z"
                  fill="#171717"
                />
                <path
                  d="M13.1451 12.438C14.3001 11.1187 15 9.39107 15 7.49996C15 6.46644 14.7909 5.48175 14.4128 4.58586L10.7552 6.21147C10.9132 6.61024 11 7.04496 11 7.49996C11 8.28611 10.7408 9.01174 10.3032 9.59602L13.1451 12.438Z"
                  fill="#171717"
                />
                <path
                  d="M8 4.0354V0.0163574C10.5416 0.183645 12.7373 1.61699 13.9626 3.69166L10.2541 5.33986C9.71063 4.64791 8.91203 4.16585 8 4.0354Z"
                  fill="#171717"
                />
              </g>
              <circle cx="16" cy="16" r="16" fill="#a3a3a3" fillOpacity=".2"/>
            </svg>
            <h4 className="mt-6 font-semibold text-gray-900">Smart budgeting</h4>
            <p className="mt-2 text-gray-700">Set budgets and stay in control with confidence.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373"></path><path fillRule="evenodd" clipRule="evenodd" d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z" fill="#171717"></path><path d="M10 12h12" stroke="#737373" strokeWidth="2" strokeLinecap="square"></path><circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2"></circle></svg>
            <h4 className="mt-6 font-semibold text-gray-900">Insightful analytics</h4>
            <p className="mt-2 text-gray-700">Understand your spending with simple, powerful insights.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z" fill="url(#_S_4_-gradient)"></path><rect x="9" y="6" width="14" height="4" rx="1" fill="#171717"></rect><circle cx="16" cy="16" r="16" fill="#A3A3A3" fillOpacity="0.2"></circle><defs><linearGradient id="_S_4_-gradient" x1="16" y1="12" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#737373"></stop><stop offset="1" stopColor="#737373" stopOpacity="0"></stop></linearGradient></defs></svg>
            <h4 className="mt-6 font-semibold text-gray-900">Personalize your style</h4>
            <p className="mt-2 text-gray-700">Choose theme colors that match your vibe.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm0 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.382a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553h-6.764a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 10.382 2z" fill="#737373"/>
              <g transform="translate(15 7) scale(0.8) rotate(40)">
                <mask id="mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" /> 
                  <circle cx="12" cy="4" r="9" fill="black" />    
                </mask>
                <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />
              </g>
              <circle cx="16" cy="16" r="16" fill="#a3a3a3" fillOpacity=".2"/>
            </svg>

            <h4 className="mt-6 font-semibold text-gray-900">Dark mode ready</h4>
            <p className="mt-2 text-gray-700">Easy on your eyes, day or night.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm0 2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.382a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553h-6.764a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 10.382 2z" fill="#737373"/>
              <circle cx="11" cy="14" r="2" fill="#171717"/>
              <circle cx="11" cy="20" r="2" fill="#171717"/>
              <circle cx="11" cy="26" r="2" fill="#171717"/>
              <path d="M16 14h6m-6 6h6m-6 6h6" stroke="#737373" strokeWidth="2" strokeLinecap="square"/>
              <circle cx="16" cy="16" r="16" fill="#a3a3a3" fillOpacity=".2"/>
            </svg>

            <h4 className="mt-6 font-semibold text-gray-900">Stay Consistent</h4>
            <p className="mt-2 text-gray-700">Build better money habits with simple daily tracking.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
