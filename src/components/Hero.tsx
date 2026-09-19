import { motion } from 'framer-motion'
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const trustIndicators = [
  '30+ Years Serving Georgia',
  'Family & Veteran Owned',
  'CertainTeed Master Contractor',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-end overflow-hidden bg-charcoal-950"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
          alt="A beautiful Georgia suburban home with a newly installed roof at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 via-transparent to-transparent" />
      </div>

      <div className="container-px relative z-10 mx-auto w-full max-w-content pb-20 pt-40 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow-light"
        >
          Georgia Roofing Specialists
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl font-serif text-[2.75rem] leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl"
        >
          Protection above.
          <br />
          Confidence below.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-cream-100/80"
        >
          Professional roofing built around quality workmanship, clear
          communication, and long-term peace of mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-burgundy-500 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-cream-50 transition-transform hover:-translate-y-0.5 hover:bg-burgundy-400"
          >
            Request a Free Estimate
          </a>
          <a
            href="tel:7702792621"
            className="inline-flex items-center justify-center gap-2 border border-cream-50/30 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-cream-50 transition-colors hover:border-cream-50"
          >
            <HiOutlinePhone size={16} /> Call (770) 279-2621
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream-50/15 pt-6"
        >
          {trustIndicators.map((item) => (
            <span
              key={item}
              className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream-100/70"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-300"
        >
          <HiOutlineLocationMarker size={14} />
          Monroe &bull; Atlanta Metro
        </motion.div>
      </div>
    </section>
  )
}
