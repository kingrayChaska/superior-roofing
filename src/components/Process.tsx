import { motion } from 'framer-motion'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="container-px mx-auto max-w-content">
        <div className="max-w-xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal-900 sm:text-5xl">
            A better roof starts with a better process.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-charcoal-100 lg:left-0 lg:top-[19px] lg:h-px lg:w-full">
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="h-full w-full origin-top bg-burgundy-500 lg:origin-left"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative flex gap-5 pl-0 lg:flex-col lg:gap-0 lg:pl-0">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-burgundy-500 bg-cream text-sm font-semibold text-burgundy-500 lg:mb-6">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal-900">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-charcoal-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
