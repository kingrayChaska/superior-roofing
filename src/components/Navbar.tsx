import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from 'react-icons/hi'
import Logo from './Logo'
import { navLinks } from '../data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)]'
            : 'bg-gradient-to-b from-charcoal-950/70 to-transparent'
        }`}
      >
        <div className="container-px mx-auto flex max-w-content items-center justify-between py-4">
          <a href="#home" aria-label="Superior Roofing Company of Georgia, home">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream-100/90 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center border border-gold-500/40 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-cream-50 transition-colors hover:border-burgundy-500 hover:bg-burgundy-500"
            >
              Free Estimate
            </a>
          </div>

          <button
            className="lg:hidden text-cream-50 p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-charcoal-950 lg:hidden"
          >
            <div className="container-px flex items-center justify-between py-4">
              <Logo />
              <button
                className="text-cream-50 p-2 -mr-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <HiOutlineX size={26} />
              </button>
            </div>

            <nav
              className="container-px mt-10 flex flex-col gap-1"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="border-b border-cream-50/10 py-5 font-serif text-3xl text-cream-50"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-px mt-10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-burgundy-500 px-6 py-4 text-center text-xs font-semibold tracking-[0.14em] uppercase text-cream-50"
              >
                Request Free Estimate
              </a>
              <a
                href="tel:7702792621"
                className="flex items-center justify-center gap-2 border border-cream-50/20 px-6 py-4 text-center text-xs font-semibold tracking-[0.14em] uppercase text-cream-50"
              >
                <HiOutlinePhone /> (770) 279-2621
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
