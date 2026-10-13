import Image from 'next/image'

export default function DownloadButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a className="download-button rounded-lg" aria-label="Download Spentify on the App Store" href="https://apps.apple.com/kh/app/spentify-expense-tracker/id1439556350" target="_blank" rel="noopener noreferrer"><Image src="/appstore.svg" width={150} height={48} alt="Download on the App Store" /></a>
      <a className="download-button rounded-lg" aria-label="Get Spentify on Google Play" href="https://play.google.com/store/apps/details?id=com.apppeppers.jamnay" target="_blank" rel="noopener noreferrer"><Image src="/google-play.svg" width={150} height={48} alt="Get it on Google Play" /></a>
    </div>
  )
}
