import { HiOutlinePhone, HiOutlineDocumentText } from 'react-icons/hi'

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream-50/10 bg-charcoal-950 lg:hidden">
      <a
        href="tel:7702792621"
        className="flex items-center justify-center gap-2 border-r border-cream-50/10 py-4 text-xs font-semibold tracking-[0.1em] uppercase text-cream-50"
      >
        <HiOutlinePhone size={16} /> Call Now
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-burgundy-500 py-4 text-xs font-semibold tracking-[0.1em] uppercase text-cream-50"
      >
        <HiOutlineDocumentText size={16} /> Free Estimate
      </a>
    </div>
  )
}
