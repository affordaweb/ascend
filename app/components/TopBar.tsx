import { Mail, Facebook } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-[#0f2744] text-white/50 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="mailto:info@ascenddevelopmentsolutions.org" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={12} />
          info@ascenddevelopmentsolutions.org
        </a>
        <a href="https://www.facebook.com/100080045962662/?locale=tl_PH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
          <Facebook size={12} />
          Facebook
        </a>
      </div>
    </div>
  )
}
