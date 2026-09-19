const timeline = [
  { year: '1990', label: 'Founded' },
  { year: 'Today', label: 'Family & Veteran Operated' },
  { year: '2025', label: 'CertainTeed Diamond Approval Award' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-28">
      <div className="container-px mx-auto grid max-w-content grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal-900 sm:text-5xl">
            Since 1990, one roof at a time.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-400">
            Superior Roofing Company of Georgia has been a family-owned,
            veteran-operated business since 1990. Over three decades, our
            focus has stayed the same: residential roofing done with care,
            for homeowners across Georgia.
          </p>

          <div className="mt-10 flex flex-col">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`flex items-baseline gap-6 py-4 ${
                  i > 0 ? 'border-t border-charcoal-100' : ''
                }`}
              >
                <span className="w-20 shrink-0 font-serif text-lg text-burgundy-500">
                  {item.year}
                </span>
                <span className="text-sm text-charcoal-900">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 h-[420px] lg:order-2 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop"
            alt="Exterior of a well-maintained Georgia residential home"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
