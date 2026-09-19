import EstimateForm from './EstimateForm'

export default function EstimateSection() {
  return (
    <section id="contact" className="bg-charcoal-950 py-24 sm:py-28">
      <div className="container-px mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow-light">Get Started</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-cream-50 sm:text-5xl">
              Let&rsquo;s take a look at your roof.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream-100/70">
              Tell us what you&rsquo;re dealing with and we&rsquo;ll help you
              determine the next step.
            </p>
          </div>

          <EstimateForm />
        </div>
      </div>
    </section>
  )
}
