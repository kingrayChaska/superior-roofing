import { serviceAreas } from '../data/serviceAreas'

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-24 sm:py-28">
      <svg
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-cream-50/5"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M40 360 L120 80 L200 260 L260 40 L360 200"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container-px relative mx-auto max-w-content text-center">
        <p className="eyebrow-light">Where We Work</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream-50 sm:text-5xl">
          Roofing across Georgia.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-cream-100/70">
          Proudly serving Monroe and communities throughout the greater
          Atlanta Metro area.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area.name}
              className="border border-cream-50/15 px-5 py-2.5 text-xs font-medium tracking-wide text-cream-50/90"
            >
              {area.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
