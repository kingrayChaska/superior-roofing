import { HiOutlinePhone } from 'react-icons/hi'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2400&auto=format&fit=crop"
          alt="A finished residential roof over a Georgia home at golden hour"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/65" />
      </div>

      <div className="container-px relative mx-auto max-w-content py-28 text-center sm:py-36">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight text-cream-50 sm:text-5xl">
          Let&rsquo;s put a stronger roof over what matters.
        </h2>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-burgundy-500 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-cream-50 transition-colors hover:bg-burgundy-400"
          >
            Request a Free Estimate
          </a>
          <a
            href="tel:7702792621"
            className="inline-flex items-center justify-center gap-2 border border-cream-50/40 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-cream-50 transition-colors hover:border-cream-50"
          >
            <HiOutlinePhone size={16} /> Call (770) 279-2621
          </a>
        </div>
      </div>
    </section>
  )
}
