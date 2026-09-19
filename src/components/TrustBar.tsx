const proofPoints = [
  { value: '30+', label: 'Years Serving Georgia' },
  { value: '1990', label: 'Founded' },
  { value: 'A+', label: 'BBB Rating' },
  { value: '2025', label: 'CertainTeed Diamond Approval Award' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-charcoal-100 bg-cream-50">
      <div className="container-px mx-auto max-w-content py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
          {proofPoints.map((point, i) => (
            <div
              key={point.label}
              className={`${i > 0 ? 'sm:border-l sm:border-charcoal-100 sm:pl-8' : ''}`}
            >
              <div className="font-serif text-3xl text-charcoal-900 sm:text-4xl">
                {point.value}
              </div>
              <div className="mt-1.5 text-[12px] leading-snug text-charcoal-400">
                {point.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-charcoal-100 pt-6 text-[12px] tracking-[0.06em] text-charcoal-400">
          CertainTeed Master Contractor
        </p>
      </div>
    </section>
  )
}
