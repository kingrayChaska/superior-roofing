import { services } from '../data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 sm:py-28">
      <div className="container-px mx-auto max-w-content">
        <div className="max-w-xl">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal-900 sm:text-5xl">
            Roofing done the right way.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-charcoal-400">
            From repairs to complete replacements, Superior Roofing Company of
            Georgia provides residential roofing services built around
            careful workmanship and clear communication.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
