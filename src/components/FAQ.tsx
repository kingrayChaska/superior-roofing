import { useState } from 'react'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-charcoal-950 py-24 sm:py-28">
      <div className="container-px mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div>
            <p className="eyebrow-light">Common Questions</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-cream-50">
              Frequently asked.
            </h2>
          </div>

          <div className="divide-y divide-cream-50/10 border-t border-cream-50/10">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-cream-50">{item.question}</span>
                    <span className="shrink-0 text-gold-300">
                      {isOpen ? <HiOutlineMinus size={18} /> : <HiOutlinePlus size={18} />}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-sm leading-relaxed text-cream-100/70">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
