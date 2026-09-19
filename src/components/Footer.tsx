import Logo from './Logo'
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const serviceLinks = [
  'Roof Repair',
  'Roof Replacement',
  'Shingle Repair',
  'Gutters',
  'Skylights',
  'Roof Maintenance',
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 pb-28 pt-16 text-cream-100/70 sm:pb-16">
      <div className="container-px mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Residential roofing expertise serving Monroe and the greater
              Atlanta Metro area.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-50">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-gold-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-50">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="transition-colors hover:text-gold-300">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-50">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <HiOutlinePhone size={15} className="text-gold-300" />
                <a href="tel:7702792621" className="transition-colors hover:text-gold-300">
                  (770) 279-2621
                </a>
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker size={15} className="mt-0.5 shrink-0 text-gold-300" />
                <span>
                  315 Nunnally Ridge Court
                  <br />
                  Monroe, GA 30655
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-50/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Superior Roofing Company of Georgia, Inc.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gold-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
